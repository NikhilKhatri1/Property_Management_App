const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const db = require('./db');
const signup = require('./models/signup');
const login = require('./models/login');
const app = express();
const cors = require('cors');


// Use cors middleware to allow requests from the frontend
app.use(cors({ origin: 'http://localhost:5173' })); // You can specify the exact origin you want to allow

const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Property Management app Login")
})

app.post('/login', async (req, res) => {
    try {
        // Extract loginId and password from request body
        const { loginId, password } = req.body;

        // Find user by loginId (which should be a string)
        const user = await signup.findOne({ loginId: loginId });

        if (user) {
            // Compare the password with the one stored in the database
            if (password === user.password) {
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

app.post('/signup', async (req, res) => {
    try {
        const data = req.body;
        const newUser = new signup(data);
        const response = await newUser.save();
        console.log("Account Created Successfully..")
        res.status(200).json(response)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server error' })
    }
})


// Start Server
app.listen(5000, () => console.log('Server started on port 5000: http://localhost:5000'));
