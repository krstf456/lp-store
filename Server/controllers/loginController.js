const userModel = require('../models/User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { generateAccessToken} = require('./authController')

loginUser = async (req, res, next) => {

    try {
        const user = await userModel.findOne({ username: req.body.username })
   
       if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
        res.status(401).json({message : "Wrong username or password"})
       
        } else {
       
            const payload = {
                _id: user._id,
                username: user.username,
                isAdmin: user.isAdmin,
                email: user.email,
            }
            
            const token = generateAccessToken(payload)
            res.status(200).header('auth-token', token).json({token: token})

        }
   
    } catch (err) {
        next(err)
    }    
}

logoutUser = async (req, res, next) => {

    try {
        res.status(200).json('You are now logged out!')

    } catch (err) {
        next(err)
    }
}

module.exports = { loginUser, logoutUser }
module.exports = { loginUser, logoutUser }
