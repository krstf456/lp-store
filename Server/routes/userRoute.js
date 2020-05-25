// User route
const router = require('express').Router()
let User = require('../Models/user.model')


// Get the the user
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/addUser').post((req, res) => {
    const username = req.body.username
    const newUser = new User({username})

    newUser.save()
        .then(() => res.json('User added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router