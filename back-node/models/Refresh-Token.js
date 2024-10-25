const mongoose = require('mongoose');


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


const Token = mongoose.model('refreshTokens', TokenSchema);

module.exports = Token;