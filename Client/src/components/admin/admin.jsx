import React from "react";
import Context from "../context/context";
import userContext from "../context/userContext";
import { Box, Button, ResponsiveContext, Main } from "grommet";
import "./Admin.css";
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
            <div className="adminContainer">
            <Box>
              <h1>Admin</h1>
              <Link to="/admin/orders">
                <Button label="Orders" />
              </Link>
              <Link to="/admin/products">
                <Button label="Products" />
              </Link>
              <Link to="/admin/uploadproduct">
                <Button label="Add Product" />
              </Link>
              <Link to="/admin/users">
                <Button label="Users" />
              </Link>
            </Box>
            </div>
          )}
        </ResponsiveContext.Consumer>
      </>
    );
  }
}

export default Admin;
