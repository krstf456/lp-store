import React from "react";
import Context from "../context/context";
import { Box, Header, Button, ResponsiveContext } from "grommet";
import { Cart } from "grommet-icons";

class Header1 extends React.Component {
    //This will enable the use of context-functions and states
    static contextType = Context;

    render() {
        return(
            <ResponsiveContext.Consumer>
            {size => (
              <Header justify="between" background="purple" pad="small" height="15rem">
                <Box>
                    <h1>Love Peace & Records</h1>
                </Box>
                  <Box
                    direction="row"
                    align="center"
                    justify="center"
                    margin={{ left: "large" }}
                  >
                    <Cart color="plain" size="medium" />
                    {size != "small" && (
                      <Button
                        primary
                        margin="small"
                        color="dark-1"
                        label="Checkout"
                      ></Button>
                    )}
                  </Box>
              </Header>
            )}
          </ResponsiveContext.Consumer>
        )
    }
}

export default Header1;
