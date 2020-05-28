const userModel = require('../models/User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { auth, generateAccessToken, generateRefreshToken, refreshTokens } = require('./authController')


const { ErrorHandler } = require('../utils/errors')

loginUser = async (req, res) => {

    try {
        const user = await userModel.findOne({ username: req.body.username })
   
       if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
           //throw new ErrorHandler(401, "Wrong username or password");
           res.status(401).send("Wrong username or password")
       
        } else {
            // JVT Session here

            const payload = {
                _id: user._id,
                username: user.username,
                isAdmin: user.isAdmin,
                email: user.email,
            }
            
            const token = generateAccessToken(payload)
            res.status(500).header('auth-token', token).json({token: token})

        //    res.status(200).json('You are logged in')
        }
   
    } catch (err) {
        res.status(500).send(err)
    }    
}

logoutUser = async (req, res, next) => {

    try {
        // jwt session = null ?
        res.status(200).json('You are now logged out!')

    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports = { loginUser, logoutUser }
module.exports = { loginUser, logoutUser }
