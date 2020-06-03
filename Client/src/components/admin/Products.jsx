import React from "react";
import Context from "../context/context";
import { Box, ResponsiveContext } from "grommet";
import "./Products.css"
import { Link } from "react-router-dom";

class Products extends React.Component {
    //This will enable the use of context-functions and states
    static contextType = Context;
  
  
  
    render() {
      return (
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box>
              <Link to="/admin">
                <h1>←</h1>
              </Link>
              <h1>Products</h1>
              <p>Uppgifter</p>
              <p>Edit category/genre of product VG</p>
              <p>Delete product VG </p>
              <p>Update stock_quantity of product G </p>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      );
    }
  }
  
  export default Products;
  