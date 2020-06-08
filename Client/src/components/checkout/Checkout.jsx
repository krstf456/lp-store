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

import UserContext from '../context/userContext'
import {getFromStorage} from '../../utils/storage'

class Checkout extends React.Component {
  //This will enable the use of context-functions and states
  static contextType = Context;

  constructor() {
    super();
    this.state = {
      errorMessage: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      streetAddress: "",
      postalCode: "",
      city: ""
    }
  }

  handleSubmit  = async() => {
    const obj = getFromStorage('storage-object')
    if (obj && obj.token) {
      const { token } = obj

      // `POST` album
      const data = {
          "products": ["5ecce53d823972c10044b197", "5ecd0528bbbbe912a584a6cc"],
          "email": "lis@test.com",
          "adress": [],
          "phone": this.state.phone,
          "sent": false,
          "payment_method": "swish",
          "total_price": 123
        }
         fetch(`http://localhost:5000/orders`,{
          method: 'POST',
          headers: {
              "Content-Type" : "application/json",
              'auth-token': token
          },
          body: JSON.stringify(data)
      })
      .then((response) => response.json())
      .catch((err) => {
              console.log(err)
      })
      .then((response) => {
          if(response.message){
              this.setState({
                  errorMessage: response.message,
              })
          }
          else{
            this.setState({
              errorMessage: "Your records is on their way. Dude.",
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              streetAddress: "",
              postalCode: "",
              city: ""
            })
          }
      })
    }
    this.setState({
      errorMessage: "It would be goovy if you logged in.",
    })
    
  }

  handleInput = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    }) 
  }

  render() {
    /*  if (this.state.orderHasBeenPlaced) {
      return (
        <Box align="center">
          <OrderPage />
        </Box>
      );
    }  */
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
            <Delivery delivery={this.state.delivery}
              handleInput={this.handleInput}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              phone={this.state.phone}
              email={this.state.email}
              streetAddress={this.state.streetAddress}
              postalCode={this.state.postalCode}
              city={this.state.city}
            />
            <Shipping />
            <Payment />
            <h5>{this.state.errorMessage}</h5>
          </Form>
        </Box>
      </Main>
    );
  }
}

export default Checkout;
