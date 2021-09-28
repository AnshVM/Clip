const mongoose = require('mongoose');
const validator = require('validator');
const uniqueVlidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
    username:{
        required:[true,"Please provide a username"],
        type:String,
        unique:true,
    },
    email:{
        required:[true,"Please provide a email"],
        type:String,
        validate:[validator.isEmail,"Please enter a valid email"],
        unique:true,
        
    },
    password:{
        required:[true,"Please provide a password"],
        type:String
    },
    followers:[String],
    following:[String],
    posts:[String],
    joinedAt:Date,
    profileImage:String
})

userSchema.plugin(uniqueVlidator);

const User = new mongoose.model('User',userSchema);

module.exports = User;