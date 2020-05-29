import React from 'react';
import { Box, ResponsiveContext } from "grommet";
import Context from "../context/context";



class ProductPage extends React.Component {
    //This will enable the use of context-functions and states
    static contextType = Context;
  
    render() {
      return (
        <ResponsiveContext.Consumer>
        {size => (
          <Box>
              <h1>ProductInfo</h1>
          </Box>
        )}
        </ResponsiveContext.Consumer>
      );
    }
  }
  
  export default ProductPage;