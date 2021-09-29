const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

//helper func for login
const checkPasswordAndSendToken = async (password, user, res) => {
    bcrypt.compare(password, user.password)
        .then(async(result) => {
            if (result === false) {
                return res.status(400).json("Incorrect username,email or password");
            }
            const payload = { id: user._id };
            const accessToken = await jwt.sign(payload, process.env.SECRET_KEY)
            return res.status(200).json(accessToken);
        })
}

exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            const user = new User({
                username,
                email,
                password: hash,
                followers: [],
                following: [],
                posts: [],
                joinedAt: new Date(),
            })

            user.save()
                .then((user) => {
                    return res.status(201).json("Success");
                })
                .catch((err) => {
                    if (err.errors.username)
                        return res.status(400).json(`Account with this username already exists`)
                    if (err.errors.email)
                        return res.status(400).json(`Account with this email already exists`)
                })
        });
    });
}



exports.login = async (req, res) => {
    const { first, password } = req.body;

    User.findOne({ username: first })
        .then(async (user) => {
            if (!user) throw "UsernameNotFound"
            checkPasswordAndSendToken(password, user, res);
        })
        .catch((err) => {
            if (err === "UsernameNotFound") {
                User.findOne({ email: first })
                    .then(async (user) => {
                        if (!user) throw "EmailNotFound"
                        checkPasswordAndSendToken(password, user, res);
                    })
                    .catch((err)=>{
                        if(err==="EmailNotFound")
                            return res.status(400).json("Username or email address incorrect")
                    })
            }
        })
}

exports.getCurrentUser = async(req,res)=>{
    User.findById(req.userId)
    .then((user)=>{
        user.password = undefined;
        console.log(user);
        return res.status(200).json(user);
    })
    .catch((err)=>console.log(err))
}

exports.getUserById = async(req,res)=>{
    User.findById(req.params.id)
    .then((user)=>{
        user.password = undefined;
        return res.status(200).json(user);
    })
    .catch((err)=>console.log(err))
}