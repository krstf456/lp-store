const orderModel = require("../models/Order.model");
const productModel = require("../models/Product.model");
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
    //updateStockQuantity();

    throw new ErrorHandler(400, "Cannot create duplicate order");
  } catch (err) {
    next(err);
  }
};

updateStockQuantity = async (req, res) => {
  //const productStock = new productModel({ stock_quantity: req.body.stock_quantity })
  //const findStock = await productModel.findOneAndUpdate({ stock_quantity: req.body.stock_quantity });
  try {
    const id = req.params.id;
    const productStock = new productModel.findByIdAndUpdate(id, req.body.stock_quantity );
    //const stock = await productModel({ stock_quantity: req.body.stock_quantity })
    await productStock.save();

    res.json({
      old: productStock,
      new: req.body.stock_quantity -1,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { createOrder, getAllOrders, updateStockQuantity };
