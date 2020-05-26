const userModel = require('../Models/user.model')
const bcrypt = require('bcrypt')
const { ErrorHandler } = require('../utils/errors')


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
 
       
   
module.exports = { createNewUser }
