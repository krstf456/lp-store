import React from "react";
import { TextInput } from "grommet";

export default class SwishBox extends React.Component {
  render() {
    return (
      <TextInput
        required
        placeholder="Swish number"
        value={1}
      />
    );
  }
}
