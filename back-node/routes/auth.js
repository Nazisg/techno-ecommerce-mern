const express = require('express');


const router = express.Router();


const authController = require('../controllers/auth-controller');
const limiter = require('../middlewares/limiter');
const { validate_register, handle_validation_errors } = require('../middlewares/validation');

router.post('/login', limiter, authController.login);


router.post('/register', validate_register, handle_validation_errors, authController.register);


router.post('/logout', authController.logout);


router.post('/refresh-token', authController.refreshAccessToken);

module.exports = router;