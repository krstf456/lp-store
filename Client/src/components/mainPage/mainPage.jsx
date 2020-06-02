import React from "react";
import Context from "../context/context";
import { Box, ResponsiveContext } from "grommet";

class MainPage extends React.Component {
  //This will enable the use of context-functions and states
  static contextType = Context;

  componentDidMount = () => {
    this.context.getAllRock();
    this.context.getAllSoul();
    this.context.getAllPop();
  };

 

  render() {
    return (
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box>
            <h1>Rock</h1>
            <Box
              justify="center"
              align="center"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {this.context.displayAllRock()}
            </Box>
            <h1>Soul</h1>
            <Box
              justify="center"
              align="center"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {this.context.displayAllSoul()}
            </Box>
            <h1>Pop</h1>
            <Box
              justify="center"
              align="center"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {this.context.displayAllPop()}
            </Box> 
            
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default MainPage;
