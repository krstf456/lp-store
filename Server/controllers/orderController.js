const orderModel = require("../models/Order.model");
const {ProductModel} =  require("../models/Product.model");


getAllOrders = async (req, res, next) => {
  try {
    // Get all orders
    const order = await orderModel.find();
    res.send(order);

  } catch (err) {
    next(err)
  }
};

createOrder = async (req, res, next) => {
  try {

    const orderData = new orderModel(req.body);
    const album = req.params.album
    const products = await productModel.find(album);

    products.forEach(async item => {
      item.stock_quantity -= 1
      await item.save();
    })

    await orderData.save();
    res.send(orderData);

  } catch (err) {
    next(err)
  }
};

module.exports = { createOrder, getAllOrders };
