const express = require('express')
const productModel = require('../Models/Product.model')
const router = express.Router()

// Create
router.post('/products', async (req, res,) => {
    res.json('ok')
  })

// Read
router.get('/products', async (req, res) => {
    res.json('ok')
  })
 
module.exports = router