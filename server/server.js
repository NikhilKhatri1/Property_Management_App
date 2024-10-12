const express = require('express');
require('dotenv').config();  // Load env variables
const db = require('./config/db'); // Database connection
const bcrypt = require('bcrypt');  // For password hashing
const cors = require('cors');
const signup = require('./models/signup');

// Initialize express app
const app = express();

// Middleware setup
app.use(cors({ origin: 'http://localhost:5173' }));  // Adjust frontend URL if needed
app.use(express.json());  // To parse JSON request body

// Home route
app.get('/', (req, res) => {
    res.send("Property Management App - Backend Running");
});

// POST /signup: Register new user
app.post('/signup', async (req, res) => {
    try {
        const { firstName, lastName, userName, loginId, password } = req.body;

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new signup({
            firstName,
            lastName,
            userName,
            loginId,
            password: hashedPassword,
        });

        // Save user to the database
        const savedUser = await newUser.save();
        console.log("Account Created Successfully...");
        res.status(201).json(savedUser);
    } catch (err) {
        console.error("Error creating account", err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST /login: Authenticate user
app.post('/login', async (req, res) => {
    try {
        const { loginId, password } = req.body;

        // Find user by loginId
        const user = await signup.findOne({ loginId });

        if (user) {
            // Compare provided password with the stored hashed password
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                console.log("Login Successful...");
                res.status(200).json({ message: 'Successfully Logged In', user });
            } else {
                console.log("Wrong Password");
                res.status(401).json({ message: 'Unauthorized: Wrong Password' });
            }
        } else {
            console.log("Wrong loginId");
            res.status(401).json({ message: 'Unauthorized: Wrong loginId' });
        }
    } catch (err) {
        console.error("Login error", err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}: http://localhost:${PORT}`));
