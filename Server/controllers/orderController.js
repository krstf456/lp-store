const orderModel = require("../models/Order.model");

getAllOrders = async (req, res) => {
  try {
    // Get all orders
    const order = await orderModel.find();
    res.send(order);
  } catch (err) {
    res.status(500).send(err)
  }
};

createOrder = async (req, res) => {
  // TODO: add user to order
  try {
    const orderData = new orderModel(req.body);
   
    await orderData.save();
    res.send(orderData);

  } catch (err) {
    res.status(500).send(err)
  }
};
module.exports = { createOrder, getAllOrders };
