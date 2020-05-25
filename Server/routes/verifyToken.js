const jwt = require('jsonwebtoken')


module.exports = function auth(req, res, next)  {
    const token = req.header('auth-token')

    if(!token) return res.status(401).send('Access Denied')

    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        req.user = verified
        next()
    }
    catch(err) {
        res.status(400).send('Invalid Token')
    }
}

// const router = require('express').Router()
// const { register } = require('../controllers/authController')

// router.post('/register', registerUser, async (req, res) => {})


// module.exports = router