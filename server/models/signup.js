const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    loginId: { type: String, required: true, unique: true }, // Ensure loginId is unique
    password: { type: String, required: true } // Hashed password
});

// Export model with collection name 'users'
const signup = mongoose.model('User', signupSchema);

module.exports = signup;
