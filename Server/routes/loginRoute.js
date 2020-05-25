const express = require('express')
const router = express.Router()
const userModel = require('../Models/user.model')
const { loginUser } = require('../controllers/loginController')

// Login user
router.post('/login', loginUser, async (req, res,) => {})

// Logout user
router.delete('/logout', async (req, res) => {})

module.exports = router
