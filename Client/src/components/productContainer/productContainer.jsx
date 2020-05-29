import React from 'react';
import { Box, ResponsiveContext } from "grommet";
import Context from "../context/context";



class ProductContainer extends React.Component {
    //This will enable the use of context-functions and states
    static contextType = Context;
  
    render() {
      return (
        <ResponsiveContext.Consumer>
        {size => (
          <Box height="20rem" width="20rem" margin="large" background="purple">
              <h1>Product</h1>
          </Box>
        )}
        </ResponsiveContext.Consumer>
      );
    }
  }
  
  export default ProductContainer;
  