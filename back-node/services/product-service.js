const Product = require("../models/Product");


exports.getAllProducts = async () => {
    return await Product.find().populate('category', '-_id -__v');
};  


exports.getProductByID = async id => {
    return await Product.findOne({ _id: id }).populate('category', '-_id -__v');
};


exports.addProduct = async product => {
    return await new Product(product).save();
};


exports.editProduct = async (id, product) => {
    return await Product.findOneAndUpdate(
        { _id: id },
        product,
        { new: true, runValidators: true }
    );
};


exports.deleteProduct = async id => {
    return await Product.findOneAndDelete({ _id: id });
};