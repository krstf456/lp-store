import React from "react";
import {AccordionPanel, Box } from "grommet";

class OrderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  
    render() {
      let sent = ""
      if(this.props.orderData.sent){
        sent = ": ✓"
      }
      return (
        <AccordionPanel label={"Ordernr: #" + this.props.orderData._id + " " + sent}>
          <Box background="light-2" overflow="auto" style={{padding: "1em"}}>
          <Box
              justify="center"
              align="center"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <Box>
                adress
              </Box>
              <Box>
                Order List
              </Box>
            </Box>
          </Box>
        </AccordionPanel>
      );
    }
  }
  
  export default OrderList;
  