// Path
const mongoose = require('mongoose');

// Schema 
const CategorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,  
        required: false 
    }
}, {
    timestamps: true
});

// Model
const Category = mongoose.model('categories', CategorySchema);

module.exports = Category;
