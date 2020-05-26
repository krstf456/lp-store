const router = require('express').Router()
const { auth, authenticateToken } = require('./verifyToken')

orders = [
    {userID: '5ecbcd3160a2c05320657a18',
    order: 'Hocus Pocus Focus'},
    {userID: 'Burt',
    order: 'Hubba Bubba'},
]

router.get('/', auth, (req, res) => {
res.send(req.user)
})


router.get('/userOrders', auth, (req, res) => {
    res.json(orders.filter(order => order.userID === req.user._id))
})


module.exports = router