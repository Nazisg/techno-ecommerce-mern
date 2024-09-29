// Path 
const express = require('express');

// Router 
const router = express.Router();

// Imports 
const orderController = require('../controllers/order-controller');

// GET
router.get('/all', orderController.getAllOrders); // All Orders
router.get('/:id', orderController.getOrderByCardID); // Order By Card ID

// POST
router.post('/create/:id', orderController.createOrder);

// PUT
router.put('/edit/:id', orderController.editOrder);

// DELETE
router.delete('/delete/:id', orderController.deleteOrder);

module.exports = router;