const express = require('express')
const router = express.Router()
const userModel = require('../models/User.model')
const { loginUser, logoutUser } = require('../controllers/loginController')

// Login user
router.post('/login', loginUser, async (req, res,) => {})

// Logout user
router.delete('/logout', logoutUser, async (req, res) => {})

module.exports = router
