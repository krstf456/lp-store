import React, { CSSProperties } from "react";
import {
  Box,
  Text,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  ResponsiveContext,
} from "grommet";
import { Cart, FormAdd, FormSubtract, FormTrash } from "grommet-icons";
import Context from "../context/context";

export default class ShoppingCart extends React.Component {
  static contextType = Context;

  render() {
    localStorage.getItem("cart", this.context.shoppingCart);
    console.log("render", this.context.shoppingCart);
    return (
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box pad="large" gap="large" width="large" background="light-1">
            <Box direction="row" width="large" justify="between">
              <Text size="large" weight="bold">
                Cart
              </Text>
              <Cart color="brand"></Cart>
            </Box>
            <Box /* style={cartboxContainer(size)} */>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell scope="col">
                      <strong>Items</strong>
                    </TableCell>
                    <TableCell size="xsmall" scope="col">
                      <strong>Album</strong>
                    </TableCell>
                    <TableCell scope="col">
                      <strong>Qty</strong>
                    </TableCell>
                    <TableCell scope="col">
                      <strong>Price</strong>
                    </TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {this.context.shoppingCart.map((product, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell scope="row">
                          <img style={{height: "3rem", width: "3rem"}}
                          src={product.image} />
                        </TableCell>
                    <TableCell size="small">{product.album}</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>{product.price} {/* * quantity */} SEK</TableCell>
                        <TableCell>
                          <FormAdd></FormAdd>
                          <FormSubtract></FormSubtract>
                          <FormTrash></FormTrash>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                 {/*  <TableRow>
                    <TableCell border="bottom"></TableCell>
                    <TableCell border="bottom"></TableCell>
                    <TableCell border="bottom"></TableCell>
                    <TableCell border="bottom"></TableCell>
                  </TableRow> */}
                  <TableRow>
                    <TableCell scope="row">
                      <strong>Total</strong>
                    </TableCell>
                    <TableCell scope="row">
                      <strong></strong>
                    </TableCell>
                    <TableCell>
                      <strong>total</strong>
                    </TableCell>
                    <TableCell>
                      <strong>total</strong>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

/* const cartboxContainer = (size: string): CSSProperties => ({
  fontSize: size == "small" ? "8pt" : size == "medium" ? "12pt" : "16pt"
}); */
