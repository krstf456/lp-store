import React from "react";
import { FormField } from "grommet";


export default class Invoice extends React.Component {
  render() {
    return (
          <FormField
            name="email"
            label="Email"
            type="text"
            required
            autoComplete="email"
          />
    );
  }
}