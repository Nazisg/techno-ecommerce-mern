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
    },
    price: {
        type: Number,
        required: true
    },
    salePrice: {
        type: Number,
        required: false
    },
    mainImageUrl: {
        type: String, // URL to the main image
        required: true
    },
    additionalImageUrls: [{
        type: String // URLs for additional images, useful for a carousel
    }],
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
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
