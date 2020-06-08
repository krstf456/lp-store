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
	static contextType = UserContext

  constructor() {
    super();
    this.state = {
      errorMessage: "",
      firstName: "",
      lastName: "",
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
        user_Id: this.context.id,
        products: ['5eccdced52ae746468b66868','5ecce53d823972c10044b197'],
        email: this.context.email,
        adress:  [{
          first_name: this.state.firstName,
          last_name: this.state.lastName,
          street_address: this.state.streetAddress,
          postcode: this.state.postalCode,
          city: this.state.city
          }]
        ,
        phone: this.state.phone,
        payment_method: "swish",
        total_price: 1234
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
              errorMessage: `Your records is on their way. Dude. \n Love and the invoice is sent to ${this.context.email}`,
              firstName: "",
              lastName: "",
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
            <Delivery 
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
