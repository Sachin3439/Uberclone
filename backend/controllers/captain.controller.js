const captainModel = require('../models/captain.model');
const { validationResult } = require('express-validator');
const captainService=require('../services/captain.service');
const blacklistmodel=require('../models/blacklistToken.model');



exports.registerCaptain=async(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
     const isCaptainExist = await captainModel.findOne({email:req.body.email});
     if(isCaptainExist){
        return res.status(400).json({ errors: [{ msg: 'Captain with this email already exists' }] });
     }
    try {
        const { fullname, email, password, vehicle } = req.body;
        const captain = await captainService.createCaptain({
            firstname: fullname.firstname,
             lastname: fullname.lastname,
              email, password,
              color: vehicle.color,
               plate: vehicle.plate,
               capacity: vehicle.capacity,
                vehicleType: vehicle.vehicleType });

        const token = captain.generateAuthToken();

        captain.password = undefined; //
        res.status(201).json({ captain, token });
    } catch (error) {
        next(error);
    }
};


exports.loginCaptain=async(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

        const captain = await captainModel.findOne({ email }).select('+password');
        console.log(captain);
        if (!captain) {
            return res.status(401).json({ errors: [{ msg: 'Invalid email or password' }] });
        }
        const isMatch = await captain.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ errors: [{ msg: 'Invalid email or password' }] });
        }
        const token = captain.generateAuthToken();
        res.cookie('token', token );
        captain.password = undefined;
        res.status(200).json({ captain, token });

};

exports.getCaptainProfile=async(req,res,next)=>{
res.status(200).json({ captain: req.captain });
}
exports.logoutCaptain=async(req,res,next)=>{
    res.clearCookie('token');
    const token =req.cookies?.token || req.header('Authorization')?.split(' ')[1];
    await blacklistmodel.create({token});
    res.status(200).json({ msg: 'Captain logged out successfully' });
}
