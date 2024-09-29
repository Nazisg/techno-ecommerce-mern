// Path
const mongoose = require('mongoose');

// Schema 
const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: false,
        default: 'There is no description about this product'
    },
    price: {
        type: Number,
        required: true
    },
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
        required: true
    }]
}, {
    timestamps: true
});

// Model
const Product = mongoose.model('products', ProductSchema);

module.exports = Product;