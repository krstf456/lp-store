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
		res.status(401).send("Cool it. You're not an admin")
	}
}

function generateAccessToken(user) {
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
		res.status(200).json(req.user)
	} catch (err) {
		res.status(400).json({ message: 'Invalid Token' })
	}
}

module.exports = {
	auth,
	isAdminTrue,
	generateAccessToken,
	generateRefreshToken,
	verifyToken,
}
