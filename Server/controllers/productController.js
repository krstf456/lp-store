const productModel = require("../models/Product.model");

addProduct = async (req, res, next) => {
  try {
    const product = new productModel(req.body);
    const findProduct = await productModel.findOne({ album: req.body.album });

    // If album doesn't exist, create and save a new one
    if (!findProduct) {
      await product.save();
      res.send(product);
    } else {
      res.status(404).json({message : "Album already exists"})
    }
  } catch (err) {
    next(err)
  }
};

getAllProducts = async (req, res, next) => {
  try {
    // Get all products
    const product = await productModel.find();
    res.send(product);
  } catch (err) {
    next(err)
  }
};

updateProduct = async (req, res, next) => {
  try {
    // Find album to update and save
    const id = req.params.id;
    const product = await productModel.findByIdAndUpdate(id, req.body);
    await product.save();

    // Display old and new info about album
    res.json({
      old: product,
      new: req.body,
    });
  } catch (err) {
    next(err)
  }
};

deleteProduct = async (req, res, next) => {
  try {
    // Find album and delete
    const product = await productModel.findByIdAndDelete(req.params.id);

    if (!product) res.status(404).json("No item found");
    res.status(200).json("Album has been deleted");
  } catch (err) {
    next(err)
  }
};

getGenre = async (req, res, next) => {
  try {
    //Find genre and read
    const genre = await productModel.find({ genre: req.params.genre });
    if (genre.length == 0) {
      res.status(404).json({message: "Genre not found"})
    } else {
      res.status(200).send(genre);
    }
  } catch (err) {
    next(err)
  }
};


module.exports = {
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getGenre
}
