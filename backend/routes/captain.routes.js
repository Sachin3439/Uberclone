const express = require('express');
const captainRouter = express.Router();
const { body } = require('express-validator');
const captaincontroller = require('../controllers/captain.controller');
const authMiddleware = require('../middleware/auth.middleware');
const captainModel=require('../models/captain.model');


captainRouter.post('/register',[
    body('fullname.firstname').notEmpty().withMessage('Firstname is required'),
    body('fullname.lastname').notEmpty().withMessage('Lastname is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').notEmpty().withMessage('Vehicle color is required'),
    body('vehicle.plate').notEmpty().withMessage('Vehicle plate is required'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Vehicle capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car', 'bike', 'auto']).withMessage('Invalid vehicle type'),
],
    captaincontroller.registerCaptain
);


captainRouter.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
],
    captaincontroller.loginCaptain
);



captainRouter.get('/profile',authMiddleware.authCaptain,captaincontroller.getCaptainProfile);
captainRouter.get('/logout', authMiddleware.authCaptain,captaincontroller.logoutCaptain);


module.exports = captainRouter;