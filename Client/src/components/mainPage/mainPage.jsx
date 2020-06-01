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
            <h1>All records</h1>
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
