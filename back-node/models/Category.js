// Path
const mongoose = require('mongoose');

// Schema 
const CategorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Model
const Category = mongoose.model('categories', CategorySchema);

module.exports = Category;