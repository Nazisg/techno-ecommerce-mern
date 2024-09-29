// Path And Imports
const Category = require("../models/Category");

// Get All Categories
exports.getAllCategories = async () => {
    return await Category.find();
};

// Get Category By ID
exports.getCategoryByID = async id => {
    return await Category.findOne({ _id: id });
};

// Get Category By Title
exports.getCategoryByTitle = async title => {
    return await Category.findOne({ title: title });
};

// Add New Category
exports.addCategory = async category => {
    return await new Category(category).save();
};

// Edit Category 
exports.editCategory = async (id, category) => {
    return await Category.findOneAndUpdate(
        { _id: id },
        category,
        { new: true, runValidators: true }
    );
};

// Delete Category
exports.deleteCategory = async id => {
    return await Category.findOneAndDelete({ _id: id });
};