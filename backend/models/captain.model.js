const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const captainSchema=new mongoose.Schema({
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
        },
        status:{
            type:String,
            enum:['available','unavailable'],
            default:'unavailable',
        },
        vehicle:{
            color:{
                type:String,
                required:true,
                minlength:[3,"color must be at least 3 characters"],
            },
            plate:{
                type:String,
                required:true,
                minlength:[3,"plate must be at least 3 characters"],
            },
            capacity:{
                type:Number,
                required:true,
                min:[1,"capacity must be at least 1"],
            },
            vehicleType:{
                type:String,
                enum:['car','bike','auto'],
                required:true,
            },
        },
        location:{
            lat:{
                type:Number,
            },
            lng:{
                type:Number,
            }
        }
})

captainSchema.methods.generateAuthToken = function () {
    return jwt.sign(
        { _id: this._id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '1d' }
    );
};
captainSchema.methods.comparePassword=async function (password){
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}

module.exports=mongoose.model('captain',captainSchema);