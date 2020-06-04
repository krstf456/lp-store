const express = require('express')
const shippingModel = require('../models/Shipping.model')
const router = express.Router()
const { getShippingAlternatives } = require('../controllers/shippingController')


// Get shipping alternatives
router.get('/shipping', getShippingAlternatives, async (req, res) => {})


module.exports = router
