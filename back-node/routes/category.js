// Path 
const express = require('express');

// Router 
const router = express.Router();

// Imports 
const categoryController = require('../controllers/category-controller');
const authenticateToken = require('../middlewares/auth');

// GET
router.get('/all', categoryController.getAllCategories); // All Categories
router.get('/:id', authenticateToken, categoryController.getCategoryByID); // One Category By ID

// POST
router.post('/add', authenticateToken, categoryController.addCategory);

// PUT
router.put('/edit/:id', authenticateToken, categoryController.editCategory);

// DELETE
router.delete('/delete/:id', authenticateToken, categoryController.deleteCategory);

module.exports = router;