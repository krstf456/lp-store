import React from "react";
import { Accordion, Box, ResponsiveContext } from "grommet";
import axios from "axios";
import ProductList from './ProductList';
import { Link } from "react-router-dom";
import UserContext from '../context/userContext';
import "./Admin.css";
import { Rewind } from 'grommet-icons';

class Products extends React.Component {
  static contextType = UserContext

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
        <>
        {this.context.renderRedirect()}
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box style={{minHeight: "85vh"}} className="heightContainer">
              <Link to="/admin" style={{marginTop:"1em"}}>
                <Rewind size="large" color="#7D4487"/>
              </Link>
              <h1>Products</h1>
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
        </>
      );
    }
  }
  
  export default Products;
  