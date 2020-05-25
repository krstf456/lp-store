const userModel = require('../Models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

loginUser = async (req, res) => {

    try {
        const user = await userModel.findOne({ username: req.body.username })
   
    //    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    //        return res.status(401).json('Wrong username or password')
       
        } else {
            // JVT Session here
            // Create and assign token
            //import auth controller?
            const token = jwt.sign({_id: user._id}, process.env.ACCESS_TOKEN_SECRET)
            res.header('auth-token', token).send(token)


        //    res.status(200).json('You are logged in')
        }
   
    } catch (err) {
           res.status(500).send(err)
    }    
}

module.exports = { loginUser }




// app.get('/posts', authenticateToken, (req, res) => {
//     res.json(posts.filter(post => post.username === req.user.name))
// })

// app.post('/token', (req, res) => {
//     const refreshToken = req.body.token
// })

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

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s'})
}
