import React from "react";
import Context from "../context/context";
import { Box, ResponsiveContext } from "grommet";
import ProductContainer from "../productContainer/productContainer";

class MainPage extends React.Component {
  //This will enable the use of context-functions and states
  static contextType = Context;



  render() {
    return (
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box>
            <h1>All records</h1>
            <ProductContainer />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default MainPage;
