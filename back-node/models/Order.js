const mongoose = require('mongoose');

 
const OrderSchema = mongoose.Schema({
    cardID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cards',
        required: true
    },
    deliveryAdress: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    isDelivered: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});


const Order = mongoose.model('orders', OrderSchema);

module.exports = Order;