import React from 'react';
import { Box, ResponsiveContext } from "grommet";
import Context from "../context/context";
import axios from "axios"


class ProductPage extends React.Component {
  //This will enable the use of context-functions and states
  static contextType = Context;

  state = {
    products: []
  }

  componentDidMount = () => {
    this.getProduct()
  }
  
  getProduct = () => {
    axios.get(`http://localhost:5000/products/${this.props.match.params.id}`).then((response) => {
      console.log("response", response.data)
      this.setState({ products: response.data });
    });
  };

  displayOne = () => {
    if (!this.state.products) return null;

    return this.state.products.map((product, index) => (
      <Box key={index} className="boxStyle">
          <div style={{backgroundImage: `url(${product.image})`}} className="imgStyle"></div>
          <h3>{product.album}</h3>
          <h4>{product.artist}</h4>
          <p>{product.price}</p>
          <p>{product.genre}</p>
        </Box>
    ));
  };


    render() {
      console.log(this.state.products)
      return (
        <ResponsiveContext.Consumer>
        {size => (
          <Box>
              <h1>ProductInfo</h1>
              {this.displayOne()}
          </Box>
        )}
        </ResponsiveContext.Consumer>
      );
    }
  }
  
  export default ProductPage;