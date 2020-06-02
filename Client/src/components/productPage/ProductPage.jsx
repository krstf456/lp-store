import React from 'react';
import { Box, ResponsiveContext } from "grommet";
import Context from "../context/context";
import axios from "axios"


class ProductPage extends React.Component {
  //This will enable the use of context-functions and states
  static contextType = Context;

  state = {
    products: {}
  }

  componentDidMount = () => {
    this.getOneProduct()
  }
  
  getOneProduct = () => {
    axios.get(`http://localhost:5000/product/${this.props.match.params.id}`).then((response) => {
      console.log("response", response.data)
      this.setState({ products: response.data });
    });
  };

  displayOneProduct = () => {
    if (!this.state.products) return null;

     return(
      <Box className="boxStyle">
          <div style={{backgroundImage: `url(${this.state.products.image})`}} className="imgStyle"></div>
          <h3>{this.state.products.album}</h3>
          <h4>{this.state.products.artist}</h4>
          <p>{this.state.products.price}</p>
          <p>{this.state.products.genre}</p>
          <p>{this.state.products.description}</p>
        </Box>
     )
  }; 


    render() {
      console.log(this.state.products)
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