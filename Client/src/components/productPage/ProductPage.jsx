import React from 'react';
import { Box, ResponsiveContext } from "grommet";
import Context from "../context/context";
import axios from "axios"


class ProductPage extends React.Component {
  //This will enable the use of context-functions and states
  static contextType = Context;

  state = {
    product: {}
  }

  componentDidMount = () => {
    this.getOneProduct()
  }
  
  getOneProduct = () => {
    axios.get(`http://localhost:5000/product/${this.props.match.params.id}`).then((response) => {
      this.setState({ product: response.data });
    });
  };

  displayOneProduct = () => {
    if (!this.state.product) return null;

     return(
      <Box className="boxStyle">
          <div style={{backgroundImage: `url(${this.state.product.image})`}} className="imgStyle"></div>
          <h3>{this.state.product.album}</h3>
          <h4>{this.state.product.artist}</h4>
          <p>{this.state.product.price}</p>
          <p>{this.state.product.genre}</p>
          <p>{this.state.product.description}</p>
        </Box>
     )
  }; 


    render() {
      return (
        <ResponsiveContext.Consumer>
        {size => (
          <Box>
              <h1>ProductInfo</h1>
             {this.displayOneProduct()} 
          </Box>
        )}
        </ResponsiveContext.Consumer>
      );
    }
  }
  
  export default ProductPage;