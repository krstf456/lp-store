const express = require('express')
const orderModel = require('../models/Order.model')
const router = express.Router()
const { createOrder } = require('../controllers/orderController')

router.post('/orders', createOrder, async (req, res) => {})

module.exports = router
