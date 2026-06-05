const mongoose =require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');


const userSchema =new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,"firstname must be at leasr 3 characrers"],
        },
        lastname:{
            type:String,
            required:true,
        
        },
    },
        email:{
            type:String,
            required:true,
            unique: true,
            lowercase: true,
            minlength:[3,"email must be at least 3 characters"],
        },
        password:{
            type:String,
            required:true,
            select:false,
        },
        socketId:{
            type:String,
        }
    
})


userSchema.methods.generateAuthToken = function () {
    return jwt.sign(
        { _id: this._id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '1d' }
    );
};
userSchema.methods.comparePassword=async function (password){
    return await bcrypt.compare(password,this.password);
}

userSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}

const userModel=mongoose.model('user',userSchema);

module.exports=userModel;