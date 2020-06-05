const orderModel = require("../models/Order.model");
const productModel =  require("../models/Product.model");


getAllOrders = async (req, res, next) => {
  try {
    // Get all orders
    const order = await orderModel.find();

    if (req.user.isAdmin === true) {
      res.send(order);
    } else {
      res.json("You're not admin")
    }
  } catch (err) {
    next(err)
  }
};

createOrder = async (req, res, next) => {
  // TODO: add user to order
  try {
    const id = req.params.id
    const orderData = new orderModel(req.body);
    const products = await productModel.find(id);

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
