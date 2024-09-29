// Path 
const express = require('express');

// Router 
const router = express.Router();

// Imports 
const authController = require('../controllers/auth-controller');
const limiter = require('../middlewares/limiter');
const { validate_register, handle_validation_errors } = require('../middlewares/validation');


// Login 
router.post('/login', limiter, authController.login);

// Register
router.post('/register', validate_register, handle_validation_errors, authController.register);

// Logout
router.post('/logout', authController.logout);

// Refresh Token 
router.post('/refresh-token', authController.refreshAccessToken);

module.exports = router;