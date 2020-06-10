import React from "react";
import { Box, Text, FormField } from "grommet";
import { Home } from "grommet-icons";
import UserContext from "../context/userContext";

export default class Delivery extends React.Component {
  //This will enable the use of context-functions and states
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {};
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
        {this.context.isLoggedIn &&
        <Box>
          Hey {this.context.username}! You're email is{" "}
          <strong>{this.context.email}.</strong> We will send your order
          confirmation to that one.{" "}
        </Box>}
        <FormField
          name="firstName"
          autoComplete="given-name"
          label="First Name"
          type="text"
          required
          value={this.props.firstName}
          validate={{ message: "only letters" }}
          onChange={this.props.handleInput}
        />
        <FormField
          name="lastName"
          autoComplete="family-name"
          label="Last Name"
          type="text"
          required
          value={this.props.lastName}
          validate={{ message: "only letters" }}
          onChange={this.props.handleInput}
        />
        <FormField
          name="phone"
          autoComplete="tel"
          label="Phone Number"
          type="tel"
          required
          value={this.props.phone}
          validate={{ regexp: /^[0-9]{10}$/, message: "10 digits" }}
          onChange={this.props.handleInput}
        />
        <FormField
          name="streetAddress"
          autoComplete="street-address"
          label="Address"
          type="text"
          validate={{ message: "Ex: Storgatan 1" }}
          required
          value={this.props.streetAddress}
          onChange={this.props.handleInput}
        />
        <FormField
          name="postalCode"
          autoComplete="postal-code"
          label="Postal Code"
          type=""
          required
          value={this.props.postalCode}
          validate={{ regexp: /^[0-9]{5}$/, message: "5 digits" }}
          onChange={this.props.handleInput}
        />
        <FormField
          name="city"
          autoComplete="address-level2"
          label="City"
          type="text"
          required
          value={this.props.city}
          validate={{ message: "only letters" }}
          onChange={this.props.handleInput}
        />
      </Box>
    );
  }
}
