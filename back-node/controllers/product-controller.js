// Path And Imports
const productService = require('../services/product-service');

// Get All Products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Get Product By ID
exports.getProductByID = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await productService.getProductByID(id);

        if (!product) {
            return res.status(404).json({ message: "Product couldn't found!" });
        };

        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Add New Product
exports.addProduct = async (req, res) => {
    const product = req.body;
    product.title = product.title.toLowerCase();
    try {
        if (!product.title || !product.price || !product.category) {
            return res.status(400).json({ message: 'Please fill all fields!' });
        };

        const newProduct = await productService.addProduct(product);
        res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Edit Product
exports.editProduct = async (req, res) => {
    const id = req.params.id;
    const product = req.body;
    try {
        const isExist = await productService.getProductByID(id);
        
        if (!isExist) {
            return res.status(404).json({ message: "Product couldn't found!" });
        };
        
        if (!product.title === ' ' || product.price === ' ' || product.category === ' ') {
            return res.status(400).json({ message: 'Please fill all fields!' });
        };

        product.title ? product.title.toLowerCase() : isExist.title;
        product.price ? product.price : isExist.price;
        product.category ? product.category : isExist.category;

        const editedProduct = await productService.editProduct(id, product);
        res.status(200).json({ message: 'Product editted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);  
    };
};

// Delete Product
exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const isExist = await productService.getProductByID(id);

        if (!isExist) {
            return res.status(404).json({ message: "Product couldn't found!" });
        };

        const product = await productService.deleteProduct(id);
        res.status(200).json({ message: 'Product removed successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};