import React from 'react';
import { Box, ResponsiveContext, Button } from "grommet";
import Context from "../context/context";
import axios from "axios"


class ProductPage extends React.Component {
  //This will enable the use of context-functions and states
  static contextType = Context;

  state = {
    product1: {},
    shoppingCart: []
  }

  componentDidMount = async () => {
    let product1 = await this.context.getOneProduct(this.props.match.params.id)
    console.log(product1)
  }
  
 /*  getOneProduct = () => {
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
          <Button label="Add to cart" onClick={() => {this.addToCart()}}></Button>
        </Box>
     )
  };  */

  /* addToCart = () => {
    console.log(this.state.product._id)
    this.state.shoppingCart.push(this.state.product)
    alert("Item added to cart")
    
    console.log("shoppingcart", this.state.shoppingCart)
    this.setState({ shoppingCart: this.state.shoppingCart})

    }
 */

    render() {
      return (
        <ResponsiveContext.Consumer>
        {size => (
          <Box>
              <h1>ProductInfo</h1>
             {this.context.displayOneProduct()} 
          </Box>
        )}
        </ResponsiveContext.Consumer>
      );
    }
  }
  
  export default ProductPage;