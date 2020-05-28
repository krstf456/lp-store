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
    console.log('user:', user)
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})
}

function generateRefreshToken(user) {
   return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
}

//move to mongoDB?
let refreshTokens = [

]



refreshToken = async (req, res) => {
    
    try {


        const refreshToken = req.body.token

        if (refreshToken == null) {
            return res.sendStatus(401).json('Unauthorized: No Token')
        }
        if (!refreshTokens.includes(refreshToken)) {
            return res.sendStatus(403).json('Forbidden: Invalid Token')
        } else {
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if(err) return res.sendStatus(403)
                console.log('ÄggFlärp')
                const accessToken = generateAccessToken({_id: user._id})
                console.log('Tokens Array:', refreshTokens.length)
                res.json({accessToken: accessToken})
            })
        }

    } catch (err) {
        res.status(500)
    }

}



logout = async (req, res) => {
const { token } = req.body
refreshTokens = refreshTokens.filter(token => t !== token )
}


module.exports = {
    auth,
    generateAccessToken,
    generateRefreshToken,
    refreshToken,
    refreshTokens



}