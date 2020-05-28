const orderModel = require("../models/Order.model");
const productModel =  require("../models/Product.model");

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
    const products = await productModel.find({_id: ["5ecd0528bbbbe912a584a6cc"]});

    products.forEach(async item => {
      item.stock_quantity -= 1
      await item.save();
    })

    await orderData.save();
    res.send(orderData);

  } catch (err) {
    res.status(500).send(err)
  }
};



module.exports = { createOrder, getAllOrders };
