import React from "react";
import { Accordion, Box, ResponsiveContext } from "grommet";
import axios from "axios";
import "./Products.css";
import ProductList from './ProductList';
import { Link } from "react-router-dom";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }
  
    componentDidMount = () => {
      axios.get("http://localhost:5000/products").then((response) => {
        this.setState({ products: response.data});
      });
    };
  
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
              <Accordion>  
              {this.state.products.map((product) =>
                <ProductList 
                    key={product._id} 
                    productData={product}
                />
              )}
              </Accordion>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      );
    }
  }
  
  export default Products;
  