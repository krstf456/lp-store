import React from "react";
import Context from "../context/context";
import {
  Box,
  Button,
  Main,
  Heading,
  Form,
} from "grommet";
import { } from "grommet-icons";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import Delivery from "./Delivery";
import Shipping from "./Shipping";
import Payment from "./payment/PaymentBox";
import OrderPage from "./OrderPage";


class Checkout extends React.Component {
  //This will enable the use of context-functions and states
  static contextType = Context;

  constructor() {
    super();
    this.state = {
      delivery: {
      }
    }
  }

  handleSubmit = () => {
    console.log("hej")
  }

  render() {
    /*  if (this.state.orderHasBeenPlaced) {
      return (
        <Box align="center">
          <OrderPage />
        </Box>
      );
    }  */
    console.log(this.state.delivery)
    return (
      <Main
        direction="column"
        align="center"
        pad="small"
        gap="small"
        flex="grow"
      >
        <Box>
          <Heading alignSelf="center" size="small">
            CHECKOUT
          </Heading>
          <Form autoComplete="on" validate="submit" onSubmit={this.handleSubmit}>
            <ShoppingCart />
            <Delivery/>
            <Shipping />
            <Payment />
          </Form>
        </Box>
      </Main>
    );
  }
}

export default Checkout;
