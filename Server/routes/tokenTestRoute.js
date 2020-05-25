const router = require('express').Router()
const { auth, authenticateToken } = require('./verifyToken')

orders = [
    {username: 'Skurt',
    order: 'Hocus Pocus Focus'},
    {username: 'Burt',
    order: 'Hubba Bubba'},
]

router.get('/', auth, (req, res) => {
res.send(req.user)
})


router.get('/userOrders', authenticateToken, (req, res) => {
    res.json(orders.filter(order => order.username === req.user.name))
})


module.exports = router