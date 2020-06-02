import React from "react";
import Context from "../context/context";
import UploadProduct from "./UploadProduct";
import UploadImage from "./UploadImage";
import { Box, ResponsiveContext } from "grommet";


class Admin extends React.Component {
    //This will enable the use of context-functions and states
    static contextType = Context;
  
  
  
    render() {
      return (
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box>
              <h1>Admin</h1>
              <UploadProduct/>
              <UploadImage/>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      );
    }
  }
  
  export default Admin;
  