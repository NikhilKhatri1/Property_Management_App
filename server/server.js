const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const db = require('./db');
const signin = require('./models/signin')

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send("hello world")
})

app.get('/signin', async (req, res) => {
    try {
        const data = await signin.find();
        console.log("Login data is Connected");
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal Server error' });
    }
})
app.post('/signin', async (req, res) => {
    try {
        const data = req.body;
        const newUser = new signin(data);
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
