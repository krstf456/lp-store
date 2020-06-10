import React from "react";
import userContext from "../context/userContext";
import { Box, ResponsiveContext } from "grommet";
import { Link } from "react-router-dom";
import "./Admin.css";

class Admin extends React.Component {
  //This will enable the use of context-functions and states
  // static contextType = Context
  static contextType = userContext;

  render() {
    return (
      <>
        {this.context.renderRedirect()}
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box align="center">
              <h1>Admin</h1>
              <Box className="container" gap="small">
                <Box className="linkBox">
                  <Link to="/admin/orders">
                    <h1>Orders</h1>
                  </Link>
                </Box>
                <Box className="linkBox">
                  <Link to="/admin/products">
                    <h1>All Products</h1>
                  </Link>
                </Box>
                <Box className="linkBox">
                  <Link to="/admin/uploadproduct">
                    <h1>Upload Product</h1>
                  </Link>
                </Box>
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </>
    );
  }
}

export default Admin;
