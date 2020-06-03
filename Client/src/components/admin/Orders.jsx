import React from "react";
import Context from "../context/context";
import { Box, ResponsiveContext } from "grommet";
import "./Orders.css"
import { Link } from "react-router-dom";

class Orders extends React.Component {
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
              <h1>Orders</h1>
              <p>Uppgifter</p>
              <p>See Order History G</p>
              <p>Mark as shipped VG </p>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      );
    }
  }
  
  export default Orders;
  