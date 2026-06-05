const userModel = require('../models/user.model');
const userService = require("../services/user.service");
const { validationResult } = require('express-validator');
const blacklistmodel=require('../models/blacklistToken.model');

// REGISTER
exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    const isUserExist = await userModel.findOne({email:req.body.email});
     if(isUserExist){
        return res.status(400).json({ errors: [{ msg: 'User with this email already exists' }] });
     }

    const { fullname, email, password } = req.body;

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password
    });

    const token = user.generateAuthToken();

    user.password = undefined; // ✅ hide password

    res.status(201).json({ user, token });
};

// LOGIN
exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

  
const user = await userModel.findOne({ email }).select('+password');


    if (!user) {
        return res.status(401).json({ errors: [{ msg: 'Invalid user or password' }] });
    }

    const isMatch = await user.comparePassword(password);
    

    if (!isMatch) {
        return res.status(401).json({ errors: [{ msg: 'Invalid user or password' }] });
    }

    const token = user.generateAuthToken();
    res.cookie('token', token );

    user.password = undefined;

    res.status(200).json({ user, token });
};

//PROFILE
exports.getUserProfile = async (req, res, next) => {
  res.status(200).json({ user: req.user });
}

//LOGOUT
exports.logoutUser = async (req, res, next) => {

    res.clearCookie('token');
     const token =req.cookies?.token || req.header('Authorization')?.split(' ')[1];
     await blacklistmodel.create({token});
    res.status(200).json({ msg: 'Logged out successfully' });
}