import React from "react";
import { FormField } from "grommet";
import UserContext from "../context/userContext";


export default class Invoice extends React.Component {
    //This will enable the use of context-functions and states
    static contextType = UserContext;
  
  render() {
    return (
          <FormField
            value={this.context.email}
            name="email"
            label="Email"
            type="text"
            required
            autoComplete="email"
          />
    );
  }
}