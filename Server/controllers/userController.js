const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')


createNewUser = async (req, res) => {
        try {
            const userData = new userModel(req.body)
            const findUser = await productModel.findOne ({ email: req.body.email })

            if(!findUser) {
                await bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    findUser.create(userData)
                            .then(user => {
                                res.status(200).send({ status: user.email + ' Registered'})
                            })
                            .catch(err => {
                                res.send('error: ' + err)
                            })
                })
            } else {
                res.status(401).send('User is already registered!')
            } 
        } catch (err){
            res.send('error: ' + err)

        }
    }   
       
   
module.exports = { createNewUser }
