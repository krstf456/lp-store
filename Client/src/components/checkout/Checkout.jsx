import React from "react";
import {
  Box,
  Main,
  Heading,
  Form,
} from "grommet";
import { } from "grommet-icons";
import ShoppingCart from "./ShoppingCart";
import Delivery from "./Delivery";
import Shipping from "./Shipping";
import Payment from "../payment/PaymentBox";

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

      if(localStorage.getItem('cart') === null){
        this.setState({
          errorMessage: `Dude, you need to, like, buy something, or stuff.`,
        })
      } else {
        // `POST` order

        let productList = []
        let totalSum = 0
        const products = JSON.parse(localStorage.getItem('cart'))
        for (let i = 0 ; i < products.length ; i++){
          for (let j = 0 ; j < products[i].quantity ; j++){
            productList.push(products[i].product)
          }
          delete products[i].quantity
          delete products[i].product._id
          totalSum = totalSum + products[i].product.price
        }
        const data = {
          user_Id: this.context.id,
          products: productList,
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
          total_price: totalSum
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
          this.setState({
            errorMessage: err
          })
        })
        .then((response) => {
            if(response.message){
                this.setState({
                    errorMessage: response.message,
                })
            }
            else{
              this.setState({
                errorMessage: `Your records is on their way. Dude. \n Love and a confirmation is sent to ${this.context.email}.`,
                firstName: "",
                lastName: "",
                phone: "",
                streetAddress: "",
                postalCode: "",
                city: ""
              })
              localStorage.removeItem('cart')
            }
        })
      }
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
