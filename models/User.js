const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        validate:[validator.isEmail,"Please enter a valid email"]
    },
    password:String,
    followers:[String],
    following:[String],
    posts:[String],
    joinedAt:Date,
    profileImage:String
})

const User = new mongoose.model()