const orderModel = require("../models/Order.model");
const { ErrorHandler } = require("../utils/errors");

getAllOrders = async (req, res, next) => {
  try {
    // Get all orders
    const order = await orderModel.find();
    res.send(order);
  } catch (err) {
    next(err);
  }
};

createOrder = async (req, res, next) => {
  // TODO: add user to order
  try {
    const orderData = new orderModel(req.body);

    await orderData.save();
    res.send(orderData);

    throw new ErrorHandler(400, "Cannot create duplicate order");
  } catch (err) {
    next(err);
  }
};

module.exports = { createOrder, getAllOrders };
