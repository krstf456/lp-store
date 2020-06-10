import React from "react";
import { Box, Text, Button } from "grommet";
import { Link } from "react-router-dom";

export default class OrderPage extends React.Component {
  render() {
    console.log(this.props.checkoutData)
    return (
      <Box
        align="center"
        pad="large"
        gap="large"
        width="large"
        style={{ textAlign: "center", lineHeight: "normal" }}
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
              <tr>
                <th>Album</th>
                <th>Artist</th>
                <th>qty</th>
                <th>Price</th>
                <th>Sum</th>
              </tr>
                {this.props.checkoutData.map((item) =>
                  <tr key={item.product._id}>
                    <td>{item.product.album}</td>
                    <td>{item.product.artist}</td>
                    <td>{item.quantity}</td>
                    <td>{item.product.price} :-</td>
                    <td>{item.product.price * item.quantity} :-</td>
                  </tr>
                )}
                              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>0000 :-</th>
              </tr>
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
