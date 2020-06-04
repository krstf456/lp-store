import React from "react";
import { Box, Text, RadioButton } from "grommet";
import { Deliver } from "grommet-icons";


export default class ShippingBox extends React.Component {
  

  render() {
    return (
      <Box pad="large" gap="large" width="large" background="light-1">
        <Box width="large" direction="row" justify="between">
          <Text size="large" alignSelf="start" weight="bold">
            Shipping
          </Text>
          <Deliver color="brand"></Deliver>
        </Box>
        <Box gap="small" direction="column">
            <>
              <RadioButton
                
              ></RadioButton>
              
                <Text style={{ fontSize: "11pt", marginLeft: "2.35rem" }}>
    
                </Text>
              )}
            </>
          ))}
        </Box>
      </Box>
    );
  }
}
