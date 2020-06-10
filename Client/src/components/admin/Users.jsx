import React from "react";
import userContext from "../context/userContext";
import "./Users.css"
import { Box, ResponsiveContext } from "grommet";
import { Link } from "react-router-dom";
import "./Admin.css";

class Users extends React.Component {
    //This will enable the use of context-functions and states
    static contextType = userContext;
  
  
  
    render() {
      return (
        <>
        {this.context.renderRedirect()}
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box className="adminContainer">
              <Link to="/admin">
                <h1>←</h1>
              </Link>
              <h1>Users</h1>
              <p>Uppgifter</p>
              <p>Approve admin VG</p>
              <p>Register admin??? VG</p>

            </Box>
          )}
        </ResponsiveContext.Consumer>
        </>
      );
    }
  }
  
  export default Users;
  