// Imports
const { check, validationResult } = require('express-validator');

// Register Validation
exports.validate_register = [
    check('email')
        .isEmail()
        .withMessage('Please Enter a valid Email'),
    check('password')
        .isLength({ min: 8 })
        .withMessage('Password must be greater than 8')
        .matches(/\d/)
        .withMessage('Password must have minimum 1 number')
        .matches(/[a-z]/)
        .withMessage('Password must have minimum 1 lowercase letter')
        .matches(/[A-Z]/)
        .withMessage('Password must have minimum 1 uppercase letter')
        .matches(/[\W_]/)
        .withMessage('Password must have minimum 1 special character'),
];

// Handle Validation Errors
exports.handle_validation_errors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const firstError = errors.array()[0];

        return res.status(400).json({
            field: firstError.param,
            message: firstError.msg
        });
    };
    next();
};