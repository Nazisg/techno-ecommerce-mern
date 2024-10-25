const mongoose = require('mongoose');

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


const Card = mongoose.model('cards', CardSchema);

module.exports = Card;