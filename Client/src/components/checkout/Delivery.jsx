import React from "react";
import { Box, Text, FormField } from "grommet";
import { Home } from "grommet-icons";


export default class Delivery extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      streetAddress: "",
      postalCode: "",
      addressLevel2: ""
    }
  }

  handleInput = (event) => {
    const {name, value} = event.target
    this.setState({
        [name]: value
    }) 
  }

  render() {
    return (
      <Box pad="large" gap="large" width="large" background="light-1">
        <Box direction="row" width="large" justify="between">
          <Text size="large" weight="bold">
            Delivery
          </Text>
          <Home color="brand"></Home>
        </Box>
        <FormField
          name="firstName"
          autoComplete="given-name"
          label="First Name"
          type="text"
          required
          value={this.state.firstName}
          validate={{ message: "only letters" }}
          onChange={this.handleInput}
        />
        <FormField
          name="lastName"
          autoComplete="family-name"
          label="Last Name"
          type="text"
          required
          value={this.state.lastName}
          validate={{ message: "only letters" }}
          onChange={this.handleInput}
        />
        <FormField
          name="email"
          autoComplete="email"
          label="Email"
          type="email"
          required
          value={this.state.email}
          validate={{ message: "@" }}
          onChange={this.handleInput}
        />
        <FormField
          name="phone"
          autoComplete="tel"
          label="Phone Number"
          type="tel"
          required
          value={this.state.phone}
          validate={{ regexp: /^[0-9]{10}$/, message: "10 digits" }}
          onChange={this.handleInput}
        />
        <FormField
          name="streetAddress"
          autoComplete="street-address"
          label="Address"
          type="text"
          validate={{ message: "Ex: Storgatan 1" }}
          required
          value={this.state.streetAddress}
          onChange={this.handleInput}
        />
        <FormField
          name="postalCode"
          autoComplete="postal-code"
          label="Postal Code"
          type=""
          required
          value={this.state.postalCode}
          validate={{ regexp: /^[0-9]{5}$/, message: "5 digits" }}
          onChange={this.handleInput}
        />
        <FormField
          name="city"
          autoComplete="address-level2"
          label="City"
          type="text"
          required
          value={this.state.city}
          validate={{ message: "only letters" }}
          onChange={this.handleInput}
        />
      </Box>
    );
  }
}
