const express = require('express')
const productModel = require('../Models/Product.model')
const router = express.Router()
const { addProduct, getAllProducts } = require('../controllers/productController')

// Create
router.post('/products', addProduct, async (req, res,) => {})

// Read
router.get('/products', getAllProducts, async (req, res) => {})

// Update
router.put('/products/:id', updateProduct, async (req, res) => {})
 
module.exports = router