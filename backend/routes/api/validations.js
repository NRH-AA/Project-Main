const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const validateLogin = [
    check('credential').exists({ checkFalsy: true }).notEmpty().withMessage('Email or username is required'),
    check('password').exists({ checkFalsy: true }).withMessage('Password is required.'),
    check('credential').isLength({ min: 4 }).withMessage('Username or email must be 4 or more characters'),
    check('password').isLength({ min: 6 }).withMessage('Password must be 6 or more characters'),
    handleValidationErrors
];

const validateSignUp = [
    check('username').exists({ checkFalsy: true }).withMessage('Username is required'),
    check('username').isLength({ min:4 }).withMessage('Username must be atleast 4 characters'),
    check('username').not().isEmail().withMessage('Username cannot be an email'),
    check('email').exists({ checkFalsy: true }).isEmail().withMessage('Invalid email'),
    check('firstName').exists({ checkFalsy: true }).withMessage('First name is required'),
    check('firstName').isLength({ min: 4 }).withMessage('First name must be 4 or more characters'),
    check('firstName').not().isEmail().withMessage('First name cannot be an email'),
    check('lastName').exists({ checkFalsy: true }).withMessage('Last name is required'),
    check('lastName').isLength({ min: 4 }).withMessage('Last name must be 4 or more characters'),
    check('lastName').not().isEmail().withMessage('Last name cannot be an email'),
    check('password').exists({ checkFalsy: true }).withMessage('Password is required'),
    check('password').isLength({ min: 6 }).withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
]

module.exports = {
    validateSignUp,
    validateLogin
}
