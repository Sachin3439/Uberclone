const mongoose=require('mongoose');

const blacklistTokenSchema=new mongoose.Schema({

    token:{
        type:String,
        required:true,
        unique:true,
    },
    expiresAt:{
        type:Date,
        default:Date.now,
        expires: '1d'
    },
})
module.exports=mongoose.model('blacklistToken',blacklistTokenSchema);