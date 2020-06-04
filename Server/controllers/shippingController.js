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


  module.exports = { getShippingAlternatives };