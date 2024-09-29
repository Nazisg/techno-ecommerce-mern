// Path
const express = require('express');

// Router
const router = express.Router();

// Imports
const authRouter = require('./auth');
const categoryRouter = require('./category');
const productController = require('./product');
const cardRouter = require('./card');
const orderRouter = require('./order');
const authenticateToken = require('../middlewares/auth');

// Auth
router.use('/auth', authRouter);

// Category
router.use('/category', categoryRouter);

// Product
router.use('/product', productController);

// Card 
router.use('/card', authenticateToken, cardRouter);

// Order
router.use('/order', authenticateToken, orderRouter);

module.exports = router;