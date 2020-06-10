import React from "react";
import {AccordionPanel, Box, Text } from "grommet";
import userContext from '../context/userContext'

class OrderList extends React.Component {
  static contextType = userContext

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
        <>
                {this.context.renderRedirect()}
        <AccordionPanel label={"Ordernr: #" + this.props.orderData._id + " " + sent}>
          <Box background="light-2" overflow="auto" style={{padding: "1em"}}>
          <Box
              justify="center"
              align="center"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
              }}
            >
              <Box  style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                margin: "0 2rem"
              }}>
                <h3>User Info</h3>
                <p>{this.props.orderData.adress[0].first_name}</p>
                <p>{this.props.orderData.adress[0].last_name}</p>
                <p>{this.props.orderData.adress[0].street_address}</p>
                <p>{this.props.orderData.adress[0].postcode}</p>
                <p>{this.props.orderData.adress[0].city}</p>
                <p>{this.props.orderData.adress[0]._id}</p>
                
              </Box>
              <Box  style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                margin: "0 2rem"
              }}>
                <h3>Order Info</h3>
                <p>{this.props.orderData.sent}</p>
                <p>{this.props.orderData.payment_method}</p>
                <p>{this.props.orderData.total_price}</p>
                
              </Box>
             {/* {this.state.orders.map((order) => order.products.map((product) =>
              <Box  style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                margin: "0 2rem"
              }}>
                <h3>Products</h3>
                {<div
                  style={{ backgroundImage: `url(${this.props.orderData.products.image})` }}
                  className="img"
                >
                </div>}
                <p>{console.log(products)}</p>
                <p>{this.props.orderData.products.artist}</p>
                <p>{this.props.orderData.products.album}</p>
                <p>{this.props.orderData.products._id}</p>
                <p>{this.props.orderData.products.price}</p>
              </Box>
                ))}*/}
            </Box>
          </Box>
        </AccordionPanel>
        </>
      );
    }
  }
  
  export default OrderList;
  