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

export default class ShoppingCart extends React.Component {
  static contextType = Context;

  constructor() {
    super();
    this.state = {
      totalSum: 0
    }
  }

  componentDidMount(){
    this.calculateSum()
  }

  calculateSum(){
    for (let i = 0; i < this.context.shoppingCart.length ; i++){
      let sum = this.context.shoppingCart[i].product.price * this.context.shoppingCart[i].quantity
      this.setState(prevState => {
        return {
          totalSum: prevState.totalSum + sum
        }
     })
    }
  }

  render() {
    if(localStorage.getItem('cart') === null){
      localStorage.setItem('cart', JSON.stringify([]))
    }
    this.context.shoppingCart = JSON.parse(localStorage.getItem("cart", this.context.shoppingCart));
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
                    </TableCell>
                    <TableCell scope="col">
                      <strong>Price</strong>
                    </TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {this.context.shoppingCart.map((product, index) => {
                    if (!this.context.shoppingCart) return null;
                    return (
                      <TableRow key={index}>
                        <TableCell scope="row">
                          <img
                            style={{ height: "3rem", width: "3rem" }}
                            src={product.product.image}
                          />
                        </TableCell>
                        <TableCell size="small">{product.product.album}</TableCell>
                        <TableCell>{product.quantity}</TableCell>
                        <TableCell style={{fontSize:"0.7em"}}>{product.product.price}:- /pp</TableCell>
                        <TableCell>
                          {product.product.price * product.quantity} :-
                        </TableCell>
                        <TableCell>
                          <FormAdd></FormAdd>
                          <FormSubtract></FormSubtract>
                          <FormTrash></FormTrash>
                        </TableCell>
                      </TableRow>
                    );
                  })}
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
                    <TableCell>
                    </TableCell>
                    <TableCell>
                      <strong>total</strong>
                    </TableCell>
                    <TableCell>
                      <strong>{this.state.totalSum + ":-"}</strong>
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
