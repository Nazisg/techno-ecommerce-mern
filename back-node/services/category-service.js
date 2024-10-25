
const Category = require("../models/Category");


exports.getAllCategories = async () => {
    return await Category.find();
};

exports.getCategoryByID = async id => {
    return await Category.findOne({ _id: id });
};


exports.getCategoryByTitle = async title => {
    return await Category.findOne({ title: title });
};


exports.addCategory = async category => {
    return await new Category(category).save();
};


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