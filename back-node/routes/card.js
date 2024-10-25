
const express = require('express');


const router = express.Router();


const cardController = require('../controllers/card-controller');

router.get('/:id', cardController.getCardByID); 

router.put('/edit/:id', cardController.editCard);

module.exports = router;
