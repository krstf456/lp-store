const router = require('express').Router()
const { register } = require('../controllers/authController')

router.post('/register', registerUser, async (req, res) => {})


module.exports = router