const mongoose = require('mongoose');

const signinSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true,
        unique: true
    },
    loginId: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    }
})

const signin = mongoose.model('signin', signinSchema)

module.exports = signin

