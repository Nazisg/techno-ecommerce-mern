// Path 
const express = require('express');

// Router 
const router = express.Router();

// Imports 
const cardController = require('../controllers/card-controller');

// GET
router.get('/:id', cardController.getCardByID); // Card By User ID

// PUT
router.put('/edit/:id', cardController.editCard);

module.exports = router;
