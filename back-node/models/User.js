// Path
const mongoose = require('mongoose');

// Schema 
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Model
const User = mongoose.model('users', UserSchema);

module.exports = User;