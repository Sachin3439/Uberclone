const express=require('express');
const userRouter=express.Router();
const authmiddleware = require('../middleware/auth.middleware');
const { body }=require('express-validator');
const userController=require('../controllers/user.controller');

userRouter.post('/register',
    [
        body('email').isEmail().withMessage('Invalid email address'),
        body('password').isLength({min: 6}).withMessage('password must be at least 6 characters long'),
        body('fullname.firstname').isLength({min:3}).withMessage('firstname must be at least 3 characters long'),
    ],
    userController.registerUser
)


userRouter.post('/login',[
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({min: 6}).withMessage('password must be at least 6 characters long')
],

     userController.loginUser)

userRouter.get('/profile',authmiddleware.authUser, userController.getUserProfile);
userRouter.get('/logout', authmiddleware.authUser,userController.logoutUser);

module.exports=userRouter;