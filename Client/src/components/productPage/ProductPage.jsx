import React from 'react';
import { Box, ResponsiveContext, Button } from "grommet";
import Context from "../context/context";



class ProductPage extends React.Component {
  //This will enable the use of context-functions and states
  static contextType = Context;

 /*   state = {
    product: {},
  }   */

  componentDidMount = async () => {
    let product = await this.context.getOneProduct(this.props.match.params.id)
    console.log(product)
    console.log(product.album)
  /*  this.setState({ product: product })   */
  return product
  }

  displayOneProduct = (product) => {

     if (!product) return null; 
 
     return(
      <Box className="boxStyle">
          <div style={{backgroundImage: `url(${product.image})`}} className="imgStyle"></div>
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