
const User = require('../Models/user.model')
const jwt = require('jsonwebtoken')
// const brcypt = require('bcrypt')


// app.get('/posts', authenticateToken, (req, res) => {
//     res.json(posts.filter(post => post.username === req.user.name))
// })



login = async (req, res) => {

    //Authenticate User
const username = req.body.username
const user = { name: username}
const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)

res.json({accessToken: accessToken})
}





function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
    // Bearer TOKEN
}

module.exports = { login }
