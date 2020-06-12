import React from "react";
import { Box, Text, RadioButton } from "grommet";
import { Deliver } from "grommet-icons";
import Context from "../context/context";
import "./Checkout.css";

export default class ShippingBox extends React.Component {
  static contextType = Context;

  componentDidMount = () => {
    this.context.getAllShipping();
  };

  getDeliveryDate = () => {
    const date = new Date();
    const delivery = new Date(date);
    delivery.setDate(
      delivery.getDate() + this.context.selectedShipping.shipping_time
    );
    return delivery.toDateString();
  };

  render() {
    return (
      <Box pad="large" gap="large" width="large" className="background">
        <Box width="large" direction="row" justify="between">
          <Text size="large" alignSelf="start" weight="bold">
            Shipping
          </Text>
          <Deliver color="brand"></Deliver>
        </Box>
        <Box gap="small" direction="column">
          {this.context.shippingAlternatives.map((shipping) => (
            <div key={shipping._id}>
              <RadioButton
                label={
                  shipping.company +
                  " " +
                  "(" +
                  shipping.shipping_time +
                  " " +
                  "days" +
                  ")"
                }
                name={shipping.company}
                checked={shipping === this.context.selectedShipping}
                onChange={() => this.context.setSelectedShipping(shipping)}
              ></RadioButton>
              {shipping === this.context.selectedShipping && (
                <Text style={{ fontSize: "11pt", marginLeft: "2.35rem" }}>
                  Delivery on <strong>{this.getDeliveryDate()}</strong>
                </Text>
              )}
            </div>
          ))}
        </Box>
      </Box>
    );
  }
}
