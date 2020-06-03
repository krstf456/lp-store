import React, { CSSProperties } from "react";
import {
  Box,
  Text,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  ResponsiveContext
} from "grommet";
import { Cart, FormAdd, FormSubtract, FormTrash } from "grommet-icons";



export default class ShoppingCart extends React.Component {
  render() {
    return (
          <ResponsiveContext.Consumer>
            {size => (
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
                        <TableCell scope="col" border="bottom">
                          <strong>Items</strong>
                        </TableCell>
                        <TableCell size="xsmall" scope="col" border="bottom">
                          <strong></strong>
                        </TableCell>
                        <TableCell scope="col" border="bottom">
                          <strong>Qty</strong>
                        </TableCell>
                        <TableCell scope="col" border="bottom">
                          <strong>Price</strong>
                        </TableCell>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                          <TableRow>
                            <TableCell scope="row">
                              <img
                              />
                            </TableCell>
                            <TableCell size="small">
                              title
                            </TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>
                              price * quantity SEK
                            </TableCell>
                            <TableCell>
                              <FormAdd
                              ></FormAdd>
                              <FormSubtract
                              ></FormSubtract>
                              <FormTrash
                              ></FormTrash>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                      <TableRow>
                        <TableCell border="bottom"></TableCell>
                        <TableCell border="bottom"></TableCell>
                        <TableCell border="bottom"></TableCell>
                        <TableCell border="bottom"></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell scope="row">
                          <strong>Total</strong>
                        </TableCell>
                        <TableCell scope="row">
                          <strong></strong>
                        </TableCell>
                        <TableCell>
                          <strong>total quantity</strong>
                        </TableCell>
                        <TableCell>
                          <strong>totalprice SEK</strong>
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
