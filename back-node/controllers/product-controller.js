// Path and Imports
const productService = require('../services/product-service');

// Get All Products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Failed to retrieve products', error });
    }
};

// Get Product By ID
exports.getProductByID = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productService.getProductByID(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found!" });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(`Error fetching product by ID (${id}):`, error);
        res.status(500).json({ message: 'Failed to retrieve product', error });
    }
};

// Add New Product
exports.addProduct = async (req, res) => {
    const { title, desc, price, category, salePrice, mainImageUrl, additionalImageUrls, rating } = req.body;

    try {
        // Validation for required fields
        if (!title || !price || !category) {
            return res.status(400).json({ message: 'Please fill all required fields!' });
        }

        const product = {
            title: title.toLowerCase(),
            desc,
            price,
            salePrice, // Optional
            mainImageUrl, // Required
            additionalImageUrls, // Optional
            rating: rating || 0, // Default to 0 if not provided
            category
        };

        // Add product to the database
        await productService.addProduct(product);
        res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Failed to add product', error });
    }
};

// Edit Product
exports.editProduct = async (req, res) => {
    const { id } = req.params;
    const { title, desc, price,  category, salePrice, mainImageUrl, additionalImageUrls, rating } = req.body;

    try {
        const existingProduct = await productService.getProductByID(id);

        if (!existingProduct) {
            return res.status(404).json({ message: "Product not found!" });
        }

        // Create a new object with updated fields if they exist, otherwise retain the original value
        const updatedProduct = {
            title: title ? title.toLowerCase() : existingProduct.title,
            desc: desc || existingProduct.desc,
            price: price || existingProduct.price,
            salePrice: salePrice || existingProduct.salePrice,
            mainImageUrl: mainImageUrl || existingProduct.mainImageUrl,
            additionalImageUrls: additionalImageUrls || existingProduct.additionalImageUrls,
            rating: rating !== undefined ? rating : existingProduct.rating, // Preserve 0 rating if it's explicitly provided
            category: category || existingProduct.category
        };

        // Update product in the database
        await productService.editProduct(id, updatedProduct);
        res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
        console.error(`Error editing product (${id}):`, error);
        res.status(500).json({ message: 'Failed to update product', error });
    }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const existingProduct = await productService.getProductByID(id);

        if (!existingProduct) {
            return res.status(404).json({ message: "Product not found!" });
        }

        await productService.deleteProduct(id);
        res.status(200).json({ message: 'Product removed successfully' });
    } catch (error) {
        console.error(`Error deleting product (${id}):`, error);
        res.status(500).json({ message: 'Failed to delete product', error });
    }
};
