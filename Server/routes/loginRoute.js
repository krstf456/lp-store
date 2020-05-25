// Order route

const express = require('express')
const router = express.Router()
const { login } = require('../controllers/loginController')

router.use(express.json())


router.post('/login', login, async (req, res) => {})


 
module.exports = router