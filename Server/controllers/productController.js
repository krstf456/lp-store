const productModel = require("../Models/Product.model");

addProduct = async (req, res) => {
  try {
    const product = new productModel(req.body);
    const findProduct = await productModel.findOne({ album: req.body.album });

    // If album doesn't exist, create and save a new one
    if (!findProduct) {
      await product.save();
      res.send(product);
    } else {
      res.status(400).json("Album already exists");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

getAllProducts = async (req, res) => {
  try {
    // Get all products
    const product = await productModel.find();
    res.send(product);
  } catch (err) {
    res.status(500).send(err);
  }
};

updateProduct = async (req, res) => {
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
    res.status(500).send(err);
  }
};

deleteProduct = async (req, res) => {
  try {
    // Find album and delete
    const product = await productModel.findByIdAndDelete(req.params.id);

    if (!product) res.status(404).json("No item found");
    res.status(200).json("Album has been deleted");
  } catch (err) {
    res.status(500).send(err);
  }
};

getGenre = async (req, res) => {
  try {
    //Find genre and read
    const genre = await productModel.find({ genre: req.params.genre });
    if (genre.length == 0) {
      res.status(404).send("Genre not found");
    } else {
      res.status(200).send(genre);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

getGenre = async (req, res) => {
    try {
      //Find genre and read
      const genre = await productModel.find({ genre: req.params.genre });
      if (genre.length == 0) {
        res.status(404).send("Genre not found");
      } else {
        res.status(200).send(genre);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  };

module.exports = {
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getGenre,
}
