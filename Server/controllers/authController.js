const jwt = require('jsonwebtoken')


function auth(req, res, next) {
    const token = req.header('auth-token')

    if (!token) return res.status(401).send('Access Denied')

    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        req.user = verified
        next()
    } catch (err) {
        res.status(400).send('Invalid Token')
    }
}


function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '15s'
    })
}


refreshToken = async (req, res) => {
        const refreshToken = req.body.token


      
}



module.exports = {
refreshToken}

// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//     if (token == null) return res.sendStatus(401)
//     try {

//     }
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403)
//         req.user = user
//         console.log(user._id)
//         next()
//     })
// }






// const router = require('express').Router()
// const { register } = require('../controllers/authController')

// router.post('/register', registerUser, async (req, res) => {})



module.exports = {
    auth,
    generateAccessToken,


}