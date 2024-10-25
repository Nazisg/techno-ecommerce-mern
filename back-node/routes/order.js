const express = require('express');

 
const router = express.Router();


const orderController = require('../controllers/order-controller');


router.get('/all', orderController.getAllOrders); 
router.get('/:id', orderController.getOrderByCardID); 


router.post('/create/:id', orderController.createOrder);


router.put('/edit/:id', orderController.editOrder);


router.delete('/delete/:id', orderController.deleteOrder);

module.exports = router;