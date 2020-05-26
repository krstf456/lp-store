const userModel = require('../Models/user.model')
const bcrypt = require('bcrypt')
const { ErrorHandler } = require('../utils/errors')

loginUser = async (req, res, next) => {

    try {
        const user = await userModel.findOne({ username: req.body.username })
   
       if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
           throw new ErrorHandler(401, "Wrong username or password");
       
        } else {
            // jwt session here
           res.status(200).json('You are logged in')
        }
   
    } catch (err) {
        next(err);
    }    
}

logoutUser = async (req, res, next) => {

    try {
        // jwt session = null ?
        res.status(200).json('You are now logged out!')

    } catch (err) {
        next(err);
    }
}

module.exports = { loginUser, logoutUser }