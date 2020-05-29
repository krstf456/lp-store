const express = require('express')
const orderModel = require('../models/Order.model')
const router = express.Router()
const { createOrder, getAllOrders } = require('../controllers/orderController')
const { auth } = require('../controllers/authController')




// Get all orders
router.get('/orders', auth, getAllOrders, async (req, res) => {})

// Create an order
router.post('/orders', auth, createOrder, async (req, res) => {})




module.exports = router
