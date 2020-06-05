const express = require('express')
const router = express.Router()
const { addProduct, getAllProducts, updateProduct, deleteProduct, getGenre, getOneProduct } = require('../controllers/productController')
const { isAdminTrue, auth } = require('../controllers/authController')

// Create
router.post('/products', auth, isAdminTrue, addProduct, async (req, res,) => {})

// Read
router.get('/products', getAllProducts, async (req, res) => {})

// Update
router.put('/products/:id', auth, isAdminTrue, updateProduct, async (req, res) => {})

// Delete
router.delete('/products/:id', auth, isAdminTrue, deleteProduct, async (req, res) => {})

// Read genre
router.get('/products/:genre', getGenre, async (req, res) => {})

//Read one product
router.get('/product/:id', getOneProduct, async (req, res) => {})


module.exports = router