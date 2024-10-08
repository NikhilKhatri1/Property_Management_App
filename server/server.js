const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const db = require('./db');
const signup = require('./models/signup');
const bcrypt = require('bcrypt');  // For password hashing
const cors = require('cors');

const app = express();

// Use cors middleware to allow requests from the frontend
app.use(cors({ origin: 'http://localhost:5173' }));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Home route
app.get('/', (req, res) => {
    res.send("Property Management app Login");
});

// POST /login
app.post('/login', async (req, res) => {
    try {
        const { loginId, password } = req.body;

        // Find user by loginId
        const user = await signup.findOne({ loginId: loginId });

        if (user) {
            // Compare hashed password with the stored hash
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                console.log("Login Successful...");
                res.status(200).json({ message: 'Successfully Logged In' });
            } else {
                console.log('Wrong Password');
                res.status(401).json({ message: 'Unauthorized: Wrong Password' });
            }
        } else {
            console.log('Wrong loginId');
            res.status(401).json({ message: 'Unauthorized: Wrong loginId' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST /signup
app.post('/signup', async (req, res) => {
    try {
        const { firstName, lastName, userName, loginId, password } = req.body;

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with the hashed password
        const newUser = new signup({
            firstName,
            lastName,
            userName,
            loginId,
            password: hashedPassword
        });

        // Save user to the database
        const response = await newUser.save();
        console.log("Account Created Successfully...");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start Server
app.listen(5000, () => console.log('Server started on port 5000: http://localhost:5000'));
