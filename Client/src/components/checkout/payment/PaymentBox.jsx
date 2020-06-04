import React from "react";
import { Box, Text, RadioButtonGroup, Button } from "grommet";
import { Money } from "grommet-icons";
import Swish from "./Swish";
import CreditCard from "./CreditCard";
import Invoice from "./Invoice";
import ClipLoader from "react-spinners/ClipLoader";

class PaymentBox extends React.Component {
  render() {
    return (
      <Box pad="large" gap="large" width="large" background="light-1">
        <Box direction="row" justify="between" width="large">
          <Text size="large" alignSelf="start" weight="bold">
            Payment
          </Text>
          <Money color="brand"></Money>
        </Box>
        <RadioButtonGroup
          name="paymentOptions"
          value={1}
          onChange={1}
          options={[
            {
              disabled: false,
              id: "swish",
              value: "swish",
              label: "Swish",
            },
            {
              disabled: false,
              id: "credit-card",
              value: "credit-card",
              label: "Mastercard/VISA",
            },
            {
              disabled: false,
              id: "invoice",
              value: "invoice",
              label: "Klarna Invoice",
            },
          ]}
        />

        <Swish />

        <Invoice />

        <CreditCard />
        <Box />

        <Text alignSelf="center" textAlign="center" size="large">
          Total <strong>total price SEK</strong> VAT & shipping included
        </Text>
        <Box alignSelf="center" align="center">
          {1 && (
            <Button
              type="submit"
              alignSelf="center"
              color="dark-1"
              primary
              label="COMPLETE PURCHASE"
            />
          )}
          {/* {1 && (
            <>
              <p>Please wait, your order is being placed..</p>
              <ClipLoader size={15} color={"#123abc"} loading={1} />
            </>
          )} */}
        </Box>
      </Box>
    );
  }
}

export default PaymentBox;
