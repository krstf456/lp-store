const jwt = require('jsonwebtoken')

function auth(req, res, next) {
	const token = req.header('auth-token')

	if (!token) return res.status(401).send('Access Denied')

	try {
		const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
		req.user = verified
		next()
	} catch (err) {
		res.status(400).json({ message: 'Invalid Token' })
	}
}

isAdminTrue = async (req, res, next) => {
	if (req.user.isAdmin === true) {
		next()
	} else {
		res.status(401).send('You are not an admin')
	}
}

function generateAccessToken(user) {
	console.log('user:', user)
	return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })
}

function generateRefreshToken(user) {
	return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
}



function verifyToken(req, res) {
	const token = req.header('auth-token')

	if (!token) return res.status(401).send('Access Denied')

	try {
		const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
		req.user = verified
		console.log(req.user)
		res.status(200).json(req.user)
	} catch (err) {
		res.status(400).json({ message: 'Invalid Token' })
	}
}


// refreshToken = async (req, res, next) => {
// 	try {
// 		const refreshToken = req.body.token

// 		if (refreshToken == null) {
// 			return res.status(401).json({ message: 'Unauthorized: No Token' })
// 		}
// 		if (!refreshTokens.includes(refreshToken)) {
// 			return res.sendStatus(403).json('Forbidden: Invalid Token')
// 		} else {
// 			jwt.verify(
// 				refreshToken,
// 				process.env.REFRESH_TOKEN_SECRET,
// 				(err, user) => {
// 					if (err) return res.sendStatus(403)
// 					const accessToken = generateAccessToken({ _id: user._id })
// 					res.json({ accessToken: accessToken })
// 				}
// 			)
// 		}
// 	} catch (err) {
// 		next(err)
// 	}
// }

// logout = async (req, res, next) => {
// const { token } = req.body
// refreshTokens = refreshTokens.filter(token => t !== token )
// }

module.exports = {
	auth,
	isAdminTrue,
	generateAccessToken,
	generateRefreshToken,
	verifyToken,
}
