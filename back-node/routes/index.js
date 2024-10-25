const express = require('express');


const router = express.Router();


const authRouter = require('./auth');
const categoryRouter = require('./category');
const productController = require('./product');
const cardRouter = require('./card');
const orderRouter = require('./order');
const authenticateToken = require('../middlewares/auth');


router.use('/auth', authRouter);


router.use('/category', categoryRouter);


router.use('/product', productController);


router.use('/card', authenticateToken, cardRouter);


router.use('/order', authenticateToken, orderRouter);

module.exports = router;