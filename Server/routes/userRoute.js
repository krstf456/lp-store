// User route
const Users = require('express').Router()
const userModel = require('../Models/User.model')
const { createNewUser } = require('../controllers/userController')

//Register a new user

Users.post('/user', createNewUser, async (req, res) => {})


// // Get the the user
// router.route('/').get((req, res) => {
//     User.find()
//         .then(users => res.json(users))
//         .catch(err => res.status(400).json('Error: ' + err))
// })

// router.route('/addUser').post((req, res) => {
//     const username = req.body.username
//     const newUser = new User({username})

//     newUser.save()
//         .then(() => res.json('User added'))
//         .catch(err => res.status(400).json('Error: ' + err))
// })

module.exports = router