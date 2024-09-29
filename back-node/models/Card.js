// Path
const mongoose = require('mongoose');

// Schema 
const CardSchema = mongoose.Schema({
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    cardTotal: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
});

// Model
const Card = mongoose.model('cards', CardSchema);

module.exports = Card;