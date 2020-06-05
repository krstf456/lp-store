const shippingModel =  require("../models/Shipping.model");


getShippingAlternatives = async (req, res, next) => {
    try {
      // Get
      const shipping = await shippingModel.find();

        res.send(shipping);

    } catch (err) {
      next(err)
    }
  };

  createShippingMethod = async (req, res, next) => {
    try {
        const shipping = new shippingModel(req.body);
        const findShipping = await shippingModel.findOne({ company: req.body.company });
    
        // If album doesn't exist, create and save a new one
        if (!findShipping) {
          await shipping.save();
          res.send(shipping);
        } else {
          res.status(404).json({message : "Already exists"})
        } 
      } catch (err) {
        next(err)
      }
  };


  module.exports = { getShippingAlternatives, createShippingMethod };