import React from "react";
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
import "./ShoppingCart.css";

export default class ShoppingCart extends React.Component {
  static contextType = Context;

  componentDidMount = () => {
    this.context.calculateSum();
  };

  render() {
    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    this.context.shoppingCart = JSON.parse(
      localStorage.getItem("cart", this.context.shoppingCart)
    );
    return (
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box pad="large" gap="large" width="large" className="background">
            <Box direction="row" width="large" justify="between">
              <Text size="large" weight="bold">
                Cart
              </Text>
              <Cart color="brand"></Cart>
            </Box>
            <Box>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell scope="col">
                      <strong className="smallerScreen">Items</strong>
                    </TableCell>
                    <TableCell size="xsmall" scope="col">
                      <strong>Album</strong>
                    </TableCell>
                    <TableCell scope="col">
                      <strong>Qty</strong>
                    </TableCell>
                    <TableCell scope="col"></TableCell>
                    <TableCell scope="col">
                      <strong>Price</strong>
                    </TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {this.context.shoppingCart.map(
                    ({ product, quantity }, index) => {
                      if (!this.context.shoppingCart) return null;
                      return (
                        <TableRow key={index}>
                          <TableCell scope="row">
                            <img
                              style={{ height: "3rem", width: "3rem" }}
                              src={product.image}
                              alt="product"
                              className="smallerScreen"
                            />
                          </TableCell>

                          <TableCell size="small">{product.album}</TableCell>
                          <TableCell>{quantity}</TableCell>
                          <TableCell style={{ fontSize: "0.7em" }}>
                            {product.price}:- /pp
                          </TableCell>
                          <TableCell>{product.price * quantity}:-</TableCell>
                          <TableCell>
                            <FormAdd
                              onClick={() =>
                                this.context.increaseQuantity(product)
                              }
                            ></FormAdd>
                            <FormSubtract
                              onClick={() =>
                                this.context.decreaseQuantity(product)
                              }
                            ></FormSubtract>
                            <FormTrash
                              onClick={() =>
                                this.context.deleteProduct(product)
                              }
                            >
                              >
                            </FormTrash>
                          </TableCell>
                        </TableRow>
                      );
                    }
                  )}
                  <TableRow>
                    <TableCell border="bottom"></TableCell>
                    <TableCell border="bottom"></TableCell>
                    <TableCell border="bottom"></TableCell>
                    <TableCell border="bottom"></TableCell>
                    <TableCell border="bottom"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell scope="row">
                      <strong></strong>
                    </TableCell>
                    <TableCell scope="row">
                      <strong></strong>
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <strong>Total</strong>
                    </TableCell>
                    <TableCell>
                      <strong>{this.context.calculateSum() + ":-"}</strong>
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
