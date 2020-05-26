const router = require('express').Router()
const { refreshToken } = require('../controllers/authController')

router.post('/', refreshToken, async (req, res) => {})


module.exports = router