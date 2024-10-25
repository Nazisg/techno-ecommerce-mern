 const express = require('express');

 
const router = express.Router();


const productController = require('../controllers/product-controller');
const authenticateToken = require('../middlewares/auth');


router.get('/all', productController.getAllProducts);
router.get('/:id', productController.getProductByID); 


router.post('/add', authenticateToken, productController.addProduct);


router.put('/edit/:id', authenticateToken, productController.editProduct);


router.delete('/delete/:id', authenticateToken, productController.deleteProduct);

module.exports = router;