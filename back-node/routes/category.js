const express = require('express');


const router = express.Router();


const categoryController = require('../controllers/category-controller');
const authenticateToken = require('../middlewares/auth');

T
router.get('/all', categoryController.getAllCategories); 
router.get('/:id', authenticateToken, categoryController.getCategoryByID); 


router.post('/add', authenticateToken, categoryController.addCategory);


router.put('/edit/:id', authenticateToken, categoryController.editCategory);


router.delete('/delete/:id', authenticateToken, categoryController.deleteCategory);

module.exports = router;