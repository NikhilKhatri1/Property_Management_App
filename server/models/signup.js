const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    loginId: {
        type: String,
        required: true,
        unique: true  // Ensure loginId is unique for each user
    },
    password: {
        type: String,
        required: true
    }
});

const signup = mongoose.model('signup', signupSchema);
module.exports = signup;
