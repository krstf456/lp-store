const productModel = require('../Models/Product.model')

module.exports = function addProduct (req, res) {

    const product = new productModel(req.body)
 

   
        product.save()
        res.send(product) 
       
    }