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


function generateAccessToken(userID) {
    console.log('userID:', userID)
    return jwt.sign({_id:userID}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15s'})
}

function generateRefreshToken(userID) {

}

//move to mongoDB?
let refreshTokens = [

]



refreshToken = async (req, res) => {
    
    try {


        const refreshToken = req.body.token

        if (refreshToken == null) {
            return res.status(401).json('Unauthorized: No Token')
        }
        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json('Forbidden: Invalid Token')
        } else {
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, userID) => {
                if(err) return res.status(403)
                console.log('HEEEJ')
                const accessToken = generateAccessToken({_id: userID})
                console.log('Tokens Array:', refreshTokens.length)
                res.json({accessToken: accessToken})
            })
        }

    } catch (err) {
        res.status(500).send(err)
    }

}



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
    refreshToken,
    refreshTokens



}