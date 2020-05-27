const userModel = require('../models/User.model')
const bcrypt = require('bcrypt')

getAllUsers = async (req, res) => {
    try {
        // Get all users
        const user = await userModel.find();
        res.send(user);
      } catch (err) {
        res.status(500).send(err)
      }
};

createNewUser = async (req, res) => {
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
                                res.status(500).send(err)
                            })
                })
            } else {
                res.status(401).send("User is already registered!")
            } 
        } catch (err){
            res.status(500).send(err)

        }
    }  
 
       
   
module.exports = { createNewUser, getAllUsers }
