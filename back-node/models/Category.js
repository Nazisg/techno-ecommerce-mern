const mongoose = require('mongoose');


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


const Category = mongoose.model('categories', CategorySchema);

module.exports = Category;
