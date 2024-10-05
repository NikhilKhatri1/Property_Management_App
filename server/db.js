const mongoose = require('mongoose');

const mongoUrl = 'mongodb://localhost:27017/PropertyManangementData';

mongoose.connect('mongoUrl', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log("Connected to MongoDB");
});
db.on('error', (err) => {
    console.log("Failed to Connect MongoDB", err);

});
db.on('disconnected', () => {
    console.log("Disconnected to MongoDB");
});

module.exports = db;