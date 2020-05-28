const express = require('express')
const orderModel = require('../models/Order.model')
const router = express.Router()
const { createOrder, getAllOrders } = require('../controllers/orderController')

// Get all orders
router.get('/orders', getAllOrders, async (req, res) => {})

// Create an order
router.post('/orders', createOrder, async (req, res) => {})



module.exports = router
