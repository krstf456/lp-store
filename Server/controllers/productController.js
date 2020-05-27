const productModel = require("../models/Product.model");

addProduct = async (req, res) => {
  try {
    const product = new productModel(req.body);
    const findProduct = await productModel.findOne({ album: req.body.album });

    // If album doesn't exist, create and save a new one
    if (!findProduct) {
      await product.save();
      res.send(product);
    } else {
      res.status(404).send("Album already exists")
    }
  } catch (err) {
    res.status(500).send(err)
  }
};

getAllProducts = async (req, res) => {
  try {
    // Get all products
    const product = await productModel.find();
    res.send(product);
  } catch (err) {
    res.status(500).send(err)
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
    res.status(500).send(err)
  }
};

deleteProduct = async (req, res) => {
  try {
    // Find album and delete
    const product = await productModel.findByIdAndDelete(req.params.id);

    if (!product) res.status(404).json("No item found");
    res.status(200).json("Album has been deleted");
  } catch (err) {
    res.status(500).send(err)
  }
};

getGenre = async (req, res) => {
  try {
    //Find genre and read
    const genre = await productModel.find({ genre: req.params.genre });
    if (genre.length == 0) {
      res.status(404).json("Genre not found")
    } else {
      res.status(200).send(genre);
    }
  } catch (err) {
    res.status(500).send(err)
  }
};

updateStockQuantity = async (req, res) => {
  try {
    const id = req.params.id
    const productStock = await productModel.findByIdAndUpdate(id, { "$set": { stock_quantity: req.body.stock_quantity = 12 }})
    productStock.save()

    res.json({
      old: productStock.stock_quantity,
      new: req.body.stock_quantity,
    });

  } catch (err) {
    res.status(500).send(err)
  }
}

/*    addToCart = async (req, res) => {
    const products = []

    try {
      // Find product to add to cart
      const id = req.params.id;
      const productToCart = await productModel.findById(id, req.body);
      res.send(productToCart)
      products.push(productToCart)

    } catch (err) {
      res.status(500).send(err)
    }

    console.log(products)
  }; */


module.exports = {
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getGenre,
  updateStockQuantity
}
