const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.signup = async(req,res)=>{
    const {username,email,password} = req.body;
    console.log("recived req")
    const user = new User({
        username,
        email,
        password,
        followers:[],
        following:[],
        posts:[],
        joinedAt:new Date(),
    })
    user.save((err,user)=>{
        if(err) console.log(err)
        console.log(`New user: ${JSON.stringify(user)}`);
        res.status(201);    
    })
}