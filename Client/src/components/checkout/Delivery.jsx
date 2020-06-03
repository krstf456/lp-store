import React from "react";
import { Box, Text, FormField } from "grommet";
import { Home } from "grommet-icons";


export default class Delivery extends React.Component {
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
          name="given-name"
          autoComplete="given-name"
          label="First Name"
          type="text"
          required
          validate={{ message: "only letters" }}
          onChange={1
          }
        />
        <FormField
          name="family-name"
          autoComplete="family-name"
          label="Last Name"
          type="text"
          required
          validate={{ message: "only letters" }}
          onChange={1
          }
        />
        <FormField
          name="email"
          autoComplete="email"
          label="Email"
          type="email"
          required
          validate={{ message: "@" }}
          onChange={1
          }
        />
        <FormField
          name="tel"
          autoComplete="tel"
          label="Phone Number"
          type="tel"
          required
          validate={{ regexp: /^[0-9]{10}$/, message: "10 digits" }}
          onChange={1}
        />
        <FormField
          name="street-address"
          autoComplete="street-address"
          label="Address"
          type="text"
          validate={{ message: "Ex: Storgatan 1" }}
          required
          onChange={1
          }
        />
        <FormField
          name="postal-code"
          autoComplete="postal-code"
          label="Postal Code"
          type=""
          required
          validate={{ regexp: /^[0-9]{5}$/, message: "5 digits" }}
          onChange={1
          }
        />
        <FormField
          name="address-level2"
          autoComplete="address-level2"
          label="City"
          type="text"
          required
          validate={{ message: "only letters" }}
          onChange={1
          }
        />
      </Box>
    );
  }
}
