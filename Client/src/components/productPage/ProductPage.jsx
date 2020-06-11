import React from 'react';
import { Box, ResponsiveContext, Button } from "grommet";
import Context from "../context/context";
import "./ProductPage.css"



class ProductPage extends React.Component {
  //This will enable the use of context-functions and states
  static contextType = Context;

    state = {
    product: {},
  }   

  componentDidMount = async () => {
    let product = await this.context.getOneProduct(this.props.match.params.id)
    console.log(product)
   this.setState({ product: product })  
  return product
  }

  displayOneProduct = () => {
const {product} = this.state
     if (!product) return null; 
 
     return(
      <Box className="productBox">
          <img style={{backgroundImage: `url(${product.image})`}} className="productImg"></img>
          <h3>{product.album}</h3>
          <h4>{product.artist}</h4>
          <p>{product.price}</p>
          <p>{product.genre}</p>  
          <p>{product.album}</p>
          <Button label="Add to cart" onClick={() => {this.context.addToCart(product)}}></Button>
        </Box>
     ) 
  }; 
   

    render() {
      return (
        <ResponsiveContext.Consumer>
        {size => (
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