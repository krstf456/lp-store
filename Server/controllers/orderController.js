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
    const findOrder = await orderModel.findOne({ user_Id: req.body.user_Id });

    if (!findOrder) {
      await orderData.save();
      res.send(orderData);
    } else {
      return res.status(400).send("Cannot create duplicate order")
    }
  } catch (err) {
    res.status(500).send(err)
  }
};

module.exports = { createOrder, getAllOrders };
