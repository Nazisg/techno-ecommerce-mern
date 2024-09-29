// Path 
const express = require('express');

// Router 
const router = express.Router();

// Imports 
const productController = require('../controllers/product-controller');
const authenticateToken = require('../middlewares/auth');

// GET
router.get('/all', productController.getAllProducts); // All Products
router.get('/:id', productController.getProductByID); // Product By ID

// POST
router.post('/add', authenticateToken, productController.addProduct);

// PUT
router.put('/edit/:id', authenticateToken, productController.editProduct);

// DELETE
router.delete('/delete/:id', authenticateToken, productController.deleteProduct);

module.exports = router;