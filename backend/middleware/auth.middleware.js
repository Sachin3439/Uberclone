const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const blacklistmodel=require('../models/blacklistToken.model');
const captainModel=require('../models/captain.model');


module.exports.authUser = async (req, res, next) => {
    const token =
        req.cookies?.token ||
        req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            errors: [{ msg: 'No token, authorization denied' }]
        });
    }
    
    const isblacklisted = await blacklistmodel.findOne({token:token});
    if(isblacklisted){
        return res.status(401).json({
            errors: [{ msg: 'Token is blacklisted, authorization denied' }]
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const user = await userModel.findById(decoded._id).select('-password');

        if (!user) {
            return res.status(401).json({
                errors: [{ msg: 'User not found' }]
            });
        }

        req.user = user;

        next();
    } catch (err) {
        res.status(401).json({
            errors: [{ msg: 'Token is not valid' }]
        });
    }
};

module.exports.authCaptain = async (req, res, next) => {
    const token =
        req.cookies?.token ||
        req.header('Authorization')?.split(' ')[1];
    if(!token){
        return res.status(401).json({
            errors: [{ msg: 'No token, authorization denied' }]
        });
    }
    const isblacklisted = await blacklistmodel.findOne({token:token});
    if(isblacklisted){
        return res.status(401).json({
            errors: [{ msg: 'Token is blacklisted, authorization denied' }]
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const captain=await captainModel.findById(decoded._id).select('-password');
        if (!captain) {
            return res.status(401).json({
                errors: [{ msg: 'Captain not found' }]
            });
        }

        req.captain = captain;
        next();
    } catch (err) {
        res.status(401).json({
            errors: [{ msg: 'Token is not valid' }]
        });
    }
};