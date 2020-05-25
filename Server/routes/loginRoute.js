const express = require('express')
const router = express.Router()
const userModel = require('../Models/user.model')
const { loginUser } = require('../controllers/loginController')

router.use(express.json())
// Login user
router.post('/login', loginUser, async (req, res,) => {})

module.exports = router
