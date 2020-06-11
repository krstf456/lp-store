import React from "react";
import { Box, ResponsiveContext, Button } from "grommet";
import Context from "../context/context";
import "./ProductPage.css";

class ProductPage extends React.Component {
  //This will enable the use of context-functions and states
  static contextType = Context;

  state = {
    product: {},
  };

  componentDidMount = async () => {
    let product = await this.context.getOneProduct(this.props.match.params.id);
    console.log(product);
    this.setState({ product: product });
    return product;
  };

  displayOneProduct = () => {
    const { product } = this.state;
    if (!product) return null;

    return (
      <>
        <Box style={{minHeight: "80vh"}} direction="row-responsive" className="productBox">
          <img
            style={{ backgroundImage: `url(${product.image})` }}
            className="productImg"
          />
          <Box className="textBox">
            <h2>Album: {product.album}</h2>
            <h3>Artist: {product.artist}</h3>
            <h4>Genre: {product.genre}</h4>
            <Box style={{ width: "15rem" }}>
              <h5>
                Songs: <br /> <p>{product.description}</p>
              </h5>
            </Box>
            <p>Price: {product.price} :-</p>
            <Box className="addToCartButton">
            <Button
              color="#4AAEAE"
              label="Add to cart"
              onClick={() => {
                this.context.addToCart(product);
              }}
            ><h2>Add To Cart</h2></Button>
            </Box>
          </Box>
        </Box>
      </>
    );
  };

  render() {
    return (
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box className="productContainer">
            <h1>ProductInfo</h1>
            {this.displayOneProduct()}
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default ProductPage;
