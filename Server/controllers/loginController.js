const userModel = require('../Models/user.model')
const bcrypt = require('bcrypt')

loginUser = async (req, res) => {

    try {
        const user = await userModel.findOne({ username: req.body.username })
   
       if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
           return res.status(401).json('Wrong username or password')
       
        } else {
            // JVT Session here
       
           res.status(200).json('You are logged in')
        }
   
    } catch (err) {
           res.status(500).send(err)
    }    
}

module.exports = { loginUser }