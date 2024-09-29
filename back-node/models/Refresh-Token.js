// Path 
const mongoose = require('mongoose');

// Schema
const TokenSchema = mongoose.Schema({
    token: {
        type: String,
        required: false
    },
    expiresAt: {
        type: Date,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
}, {
    timestamps: true
});

// Model
const Token = mongoose.model('refreshTokens', TokenSchema);

module.exports = Token;