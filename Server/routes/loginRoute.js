const express = require('express')
const router = express.Router()
const userModel = require('../models/User.model')
const { loginUser, logoutUser } = require('../controllers/loginController')
const { verifyToken } = require('../controllers/authController')

router.use(express.json())
// Login user
router.post('/login', loginUser, verifyToken, async (req, res,) => {})

// Logout user
router.delete('/logout', logoutUser, async (req, res) => {})

router.get('/verify', verifyToken, async (req, res) => {})

module.exports = router
