import React from "react";
import { Box, Text, Button } from "grommet";
import { Link } from "react-router-dom";
import Context from "../context/context";

export default class OrderPage extends React.Component {
  static contextType = Context;
  render() {
    return (
      <Box
        align="center"
        pad="large"
        gap="large"
        width="large"
        style={{ minHeight: "85vh", textAlign: "center", lineHeight: "normal" }}
      >
        <Box align="center">
          <h1>Your order has been placed!</h1>
          <Text>Your order number is:</Text>
          <strong>{Math.floor(Math.random() * 100000) + 600000}</strong>
        </Box>
        <Box align="center">
          <Text style={{ fontSize: "14pt" }}>
            Thank you for your purchase, we hope to see you soon again!
          </Text>
          </Box>
          <Box
              justify="center"
              align="center"
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
              }}
            > 
            <Box>
              <Text style={{ fontSize: "14pt" }}>
                <strong>Info:</strong> <br/>
                {this.props.user} <br/>
                {this.props.phone} <br/>
                {this.props.email} <br/>
              </Text>
            </Box>
            <Box>
              <Text style={{ fontSize: "14pt" }}>
                <strong>Address:</strong> <br/>
                {this.props.firstName + " " + this.props.lastName} <br/>
                {this.props.streetAddress} <br/>
                {this.props.postalCode  + " " + this.props.city} <br/>
              </Text>
            </Box>
          </Box>
            <Box>
            <table>
              <thead>
                <tr>
                  <th>Album</th>
                  <th>Artist</th>
                  <th>qty</th>
                  <th>Price</th>
                  <th>Sum</th>
                </tr>
              </thead>
                {this.props.checkoutData.map((item) =>
                  <tbody key={item.product._id}>
                    <tr>
                      <td>{item.product.album}</td>
                      <td>{item.product.artist}</td>
                      <td>{item.quantity}</td>
                      <td>{item.product.price} :-</td>
                      <td>{item.product.price * item.quantity} :-</td>
                    </tr>
                  </tbody>
                )}
                <tfoot>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{this.context.calculateSum() + this.context.selectedShipping.price} :-</td>
                  </tr>
                </tfoot>
              </table>
            </Box>
        <strong>Forgot something?</strong>
        <Link to="/">
          <Button label="Back to products" />
        </Link>
      </Box>
    );
  }
}
