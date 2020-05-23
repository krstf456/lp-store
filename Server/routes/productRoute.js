const express = require('express')
const productModel = require('../Models/Product.model')
const router = express.Router()
const addProduct = require('../controllers/productController')

// Create
router.post('/products', addProduct, (req, res,) => {
    res.json('ok')
  })

// Read
router.get('/products', async (req, res) => {
    try {
        const product = await productModel.find()
        res.send(product)
  
      } catch (err) {
        res.status(500).send(err)
      }
  })
 
module.exports = router