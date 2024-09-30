const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/authentication', { useNewUrlParser: true, useUnifiedTopology: true });

// User Schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    mobile: String,
    role: String, // 'admin' or 'user'
    googleId: String,
    facebookId: String
});

const User = mongoose.model('User', userSchema);

// Nodemailer Setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
    }
});

// Signup Route
app.post('/signup', async (req, res) => {
    const { username, email, password, mobile, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ username, email, password: hashedPassword, mobile, role });

    newUser.save()
        .then(user => {
            // Send Welcome Email
            transporter.sendMail({
                to: user.email,
                subject: 'Thank You for Signing Up',
                text: `Welcome ${user.username}, thank you for signing up!`
            });

            res.status(200).json({ message: 'User created and email sent' });
        })
        .catch(err => res.status(500).json({ error: 'Error saving user' }));
});

// Login Route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, message: 'Logged in successfully' });
});

// Google OAuth
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) return done(null, existingUser);

        new User({ googleId: profile.id, username: profile.displayName, email: profile.emails[0].value })
            .save()
            .then(user => done(null, user));
    });
}));

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/dashboard');
    }
);

// Facebook OAuth
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: "/auth/facebook/callback"
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ facebookId: profile.id }).then(existingUser => {
        if (existingUser) return done(null, existingUser);

        new User({ facebookId: profile.id, username: profile.displayName })
            .save()
            .then(user => done(null, user));
    });
}));

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/dashboard');
    }
);

// Start Server
app.listen(5000, () => console.log('Server started on port 5000'));
