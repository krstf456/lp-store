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
      const products = this.props.orderData.products
      return (
        <>
                {this.context.renderRedirect()}
        <AccordionPanel label={"Ordernr: #" + this.props.orderData._id + " " + sent}>
          <Box background="#008080" overflow="auto" style={{padding: "1em"}}>
          <Box
              alignContent="start"
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
                margin: "0 8rem"
              }}>
                <h3>User Info</h3>
                <p><strong>First Name: </strong>{this.props.orderData.adress[0].first_name}</p>
                <p><strong>Last Name: </strong>{this.props.orderData.adress[0].last_name}</p>
                <p><strong>Postcode: </strong>{this.props.orderData.adress[0].street_address}</p>
                <p><strong>Address: </strong>{this.props.orderData.adress[0].postcode}</p>
                <p><strong>City: </strong>{this.props.orderData.adress[0].city}</p>
                <p><strong>User Id: </strong>{this.props.orderData.adress[0]._id}</p>
                <p><strong>Payment Method: </strong>{this.props.orderData.payment_method}</p>
                
              </Box>
              <Box>
              <h3>Product Info</h3>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Album</th>
                    <th>Artist</th>
                    <th>qty</th>
                    <th>Price</th>
                    <th>Sum</th>
                  </tr>
                </thead>
                {products.map((product) =>
                  <tbody>
                    <tr key={product._id}>
                      <td><div
                      style={{ backgroundImage: `url(${product.image})` }}
                      className="img"
                    ></div></td>
                      <td>{product.album}</td>
                      <td>{product.artist}</td>
                      <td>{1}</td>
                      <td>{product.price} :-</td>
                      <td>{product.price * 1} :-</td>
                    </tr>
                  </tbody>
                )}
              <tfoot>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>{this.props.orderData.sent}</th>
                  <th>{this.props.orderData.total_price} :-</th>
                </tr>
              </tfoot>
              </table>
              </Box>
            </Box>
          </Box>
        </AccordionPanel>
        </>
      );
    }
  }
  
  export default OrderList;