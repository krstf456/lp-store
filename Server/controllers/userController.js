const userModel = require('../models/User.model')
const bcrypt = require('bcrypt')
const { ErrorHandler } = require('../utils/errors')

getAllUsers = async (req, res) => {
    try {
        // Get all users
        const user = await userModel.find();
        res.send(user);
      } catch (err) {
        res.status(500).send(err);
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
                throw new ErrorHandler(401, "User is already registered!")
            } 
        } catch (err){
            next(err);

        }
    }  
 
       
   
module.exports = { createNewUser, getAllUsers }
