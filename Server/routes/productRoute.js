const express = require('express')
const productModel = require('../models/Product.model')
const router = express.Router()
const { addProduct, getAllProducts, updateProduct, deleteProduct, getGenre } = require('../controllers/productController')

// Create
router.post('/products', addProduct, async (req, res,) => {})

// Read
router.get('/products', getAllProducts, async (req, res) => {})

// Update
router.put('/products/:id', updateProduct, async (req, res) => {})

// Delete
router.delete('/products/:id', deleteProduct, async (req, res) => {})

// Read genre
router.get('/products/:genre', getGenre, async (req, res) => {})

//router.get('/cart/:id', addToCart, async (req, res,) => {})

 
module.exports = router