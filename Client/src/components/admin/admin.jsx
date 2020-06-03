import React from "react";
import Context from "../context/context";
import { Box, Button, ResponsiveContext } from "grommet";
import "./Admin.css"
import { Link } from "react-router-dom";

class Admin extends React.Component {
    //This will enable the use of context-functions and states
    static contextType = Context;
  
  
  
    render() {
      return (
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box>
              <h1>Admin</h1>
              <Link to="/admin/orders">
                <Button label="Orders"/>
              </Link>
              <Link to="/admin/products">
                <Button label="Products"/>
              </Link>
              <Link to="/admin/uploadproduct">
                <Button label="Add Product"/>
              </Link>
              <Link to="/admin/users">
                <Button label="Users"/>
              </Link>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      );
    }
  }
  
  export default Admin;
  