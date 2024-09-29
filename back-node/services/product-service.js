// Path
const Product = require("../models/Product");

// Get All Products
exports.getAllProducts = async () => {
    return await Product.find().populate('category', '-_id -__v');
};  

// Get Product By ID
exports.getProductByID = async id => {
    return await Product.findOne({ _id: id }).populate('category', '-_id -__v');
};

// Add New Product
exports.addProduct = async product => {
    return await new Product(product).save();
};

// Edit Product 
exports.editProduct = async (id, product) => {
    return await Product.findOneAndUpdate(
        { _id: id },
        product,
        { new: true, runValidators: true }
    );
};

// Delete Product
exports.deleteProduct = async id => {
    return await Product.findOneAndDelete({ _id: id });
};