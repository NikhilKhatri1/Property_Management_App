const mongoose = require('mongoose');
const signup = require('./signup');
const loginSchema = mongoose.Schema({
    loginId: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const login = mongoose.model('login', loginSchema);
module.exports = login;