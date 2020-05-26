const express = require('express')
const router = express.Router()
const userModel = require('../models/User.model')
const { createNewUser, getAllUsers } = require('../controllers/userController')

//Get all users
router.get('/users', getAllUsers, async (req, res) => {})

//Register a new user
router.post('/register', createNewUser, async (req, res) => {})


module.exports = router