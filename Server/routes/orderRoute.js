const express = require('express')
const router = express.Router()
const orderModel = require('../models/Order.model')
const { createOrder } = require('../controllers/orderController')

// Login user
router.post('/order', createOrder, async (req, res,) => {})

module.exports = router
