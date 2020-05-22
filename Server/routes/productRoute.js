// Product route
const express = require('express')
const productModel = require('../models/Product.model')
const router = express.Router()


// Create
router.post('/addProduct', async (req, res) => {
  
  try {
    const product = new productModel(req.body)
    const findProduct = await productModel.findOne ({ artist: req.body.artist })

    if (!findProduct) {
      await product.save()
      res.send(product) 
      } else {
        res.status(400).json('Product already exists')
      }

  } catch (err) {
    res.status(500).send(err)
  }
})