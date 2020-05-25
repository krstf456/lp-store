const orderModel = require("../models/Order.model");

createOrder = async (req, res) => {
    try {
      const orderData = new orderModel(req.body);
      const findOrder = await orderModel.findOne({ email: req.body.email });
        
      if(!findOrder) {
         await orderData.save();
         res.send(orderData);
      } else {
        res.status(400).json('Cannot create duplicate order')
      }
     
    } catch (err) {
      res.status(500).send(err);
    }
  };


module.exports = { createOrder }