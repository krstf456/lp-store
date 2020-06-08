const userModel = require('../models/User.model')
const bcrypt = require('bcrypt')

getAllUsers = async (req, res, next) => {
    try {
        // Get all users
        const user = await userModel.find();
        res.send(user);
      } catch (err) {
        next(err)
      }
};

createNewUser = async (req, res, next) => {
        try {
            const userData = new userModel(req.body)
            const findUser = await userModel.findOne ({ email: req.body.email })

            if(!findUser) {
                await bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    userData.save()
                            .then(user => {
                                res.status(200).send({ status: user.email + ' Registered'})
                            })
                            .catch(err => {
                                next(err)
                            })
                })
            } else {
                res.status(401).json({message : "You're already regg..., regits... a user, man!"})
            } 
        } catch (err){
            next(err)

        }
    }  
 
       
   
module.exports = { createNewUser, getAllUsers }
