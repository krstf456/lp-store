import React from "react";
import { Box } from "grommet";
import UserContext from "../context/userContext";


export default class Invoice extends React.Component {
    //This will enable the use of context-functions and states
    static contextType = UserContext;
  
  render() {
    return ( 
      <>
      {this.context.isLoggedIn &&
      <Box style={{border: "1px solid black", textAlign: "left", padding: "1rem"}}>
      <h4>The invoice will be sent to your registered email:</h4>
      <p>{this.context.email}</p>
      </Box>
      }
    </>
    );
  }
}
