const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables from .env

const mongoUrl = process.env.MONGO_URI;

mongoose.connect(mongoUrl, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log("Connected to MongoDB");
});

db.on('error', (err) => {
    console.log("Failed to Connect MongoDB", err);
});

db.on('disconnected', () => {
    console.log("Disconnected from MongoDB");
});

module.exports = db;
