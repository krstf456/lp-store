import React from "react";
import { Box, Text, RadioButton } from "grommet";
import { Deliver } from "grommet-icons";
import axios from "axios";
import Context from "../context/context";

export default class ShippingBox extends React.Component {
  static contextType = Context;

  componentDidMount = () => {
    this.context.getAllShipping();
  };

  getDeliveryDate = () => {
    const date = new Date();

    const delivery = new Date(date);
    delivery.setDate(delivery.getDate());
    return delivery.toDateString();
  };

  render() {
    return (
      <Box pad="large" gap="large" width="large" background="light-1">
        <Box width="large" direction="row" justify="between">
          <Text size="large" alignSelf="start" weight="bold">
            Shipping
          </Text>
          <Deliver color="orange"></Deliver>
        </Box>
        <Box gap="small" direction="column">
          {this.context.shippingAlternatives.map((shipping) => (
            <>
              <RadioButton
                key={shipping._id}
                label={shipping.company}
                name={shipping.company}
                checked={shipping._id}
              ></RadioButton>
              <Text style={{ fontSize: "11pt" }}>
                Delivery on{" "}
                <strong>
                  {this.getDeliveryDate()}
                </strong>
              </Text>
            </>
          ))}
        </Box>
      </Box>
    );
  }
}
