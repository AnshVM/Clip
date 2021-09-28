const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
    console.log("recived req")
    const user = new User({
        username,
        email,
        password,
        followers: [],
        following: [],
        posts: [],
        joinedAt: new Date(),
    })

    user.save()
        .then((user) => {
            console.log(`New user: ${JSON.stringify(user)}`);
            return res.status(201).json(user);
        })
        .catch((err) => {
            if (err.errors.username)
                return res.status(400).json(`Account with this username already exists`)
            if (err.errors.email)
                return res.status(400).json(`Account with this email already exists`)
        })
}