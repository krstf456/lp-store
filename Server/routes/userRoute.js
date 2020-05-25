const express = require('express')
const router = express.Router()
const userModel = require('../Models/user.model')
//const userModel = require('../Models/User.model')
const { createNewUser } = require('../controllers/userController')

//Register a new user

router.post('/register', createNewUser, async (req, res) => {})

router.get('/', async (req, res) => {

    try {
        const users = await userModel.find()
        res.send(users)

    } catch (err) {
        res.status(500).send(err)
    }
})
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