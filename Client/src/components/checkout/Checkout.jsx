import React from "react";
import Context from "../context/context";
import { Box, ResponsiveContext } from "grommet";


class Checkout extends React.Component {
    
    //This will enable the use of context-functions and states
    static contextType = Context;

    
    
    
    render() {
      return (
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box pad='large' wrap={true} direction='row-responsive' justify='between'>
                <h1>Checkout</h1>
              
            </Box>
          )}
        </ResponsiveContext.Consumer>
      );
    }
  }
  
  export default Checkout;
  