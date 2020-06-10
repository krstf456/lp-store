import React from "react";
import {AccordionPanel, Box } from "grommet";
import userContext from '../context/userContext';

class OrderList extends React.Component {
  static contextType = userContext

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      totalSum: 0
    };
  }

  componentDidMount = () => {
    this.sumUp()
  }

  sumUp = () => {
    let products = this.props.orderData.products
    let newProducts = []
    let sum = 0
    for (let i = 0; i < products.length; i++){
      products[i].quantity = 1
      sum = products[i].price + sum
    }
    for (let i = 0; i < products.length; i++){
      const notInCart = newProducts.some((item) => item.album === products[i].album)
      if(!notInCart){
        newProducts.push(products[i])
      } else {
        const existingItem = newProducts.find((item) => item.album === products[i].album)
        existingItem.quantity += 1
      }
    }
    this.setState({
      products: newProducts,
      totalSum: sum
    })
  }


  
    render() {
      let sent = ""
      if(this.props.orderData.sent){
        sent = ": ✓"
      }
      return (
        <>
                {this.context.renderRedirect()}
        <AccordionPanel label={"Ordernr: #" + this.props.orderData._id + " " + sent}>
          <Box background="#008080" overflow="auto" style={{padding: "1em"}}>
          <Box
              alignContent="start"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
              }}
            >
              <Box  style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                margin: "0 8rem"
              }}>
                <h3>User Info</h3>
                <p><strong>First Name: </strong>{this.props.orderData.adress[0].first_name}</p>
                <p><strong>Last Name: </strong>{this.props.orderData.adress[0].last_name}</p>
                <p><strong>Postcode: </strong>{this.props.orderData.adress[0].street_address}</p>
                <p><strong>Address: </strong>{this.props.orderData.adress[0].postcode}</p>
                <p><strong>City: </strong>{this.props.orderData.adress[0].city}</p>
                <p><strong>User Id: </strong>{this.props.orderData.adress[0]._id}</p>
                <p><strong>Payment Method: </strong>{this.props.orderData.payment_method}</p>
                
              </Box>
              <Box>
              <h3>Product Info</h3>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Album</th>
                    <th>Artist</th>
                    <th>qty</th>
                    <th>Price</th>
                    <th>Sum</th>
                  </tr>
                </thead>
                {this.state.products.map((product) =>
                  <tbody key={product._id}>
                    <tr >

                      <td>{product.album}</td>
                      <td>{product.artist}</td>
                      <td>{product.quantity}</td>
                      <td>{product.price} :-</td>
                      <td>{product.price * product.quantity} :-</td>
                    </tr>
                  </tbody>
                )}
              <tfoot>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>{this.state.totalSum} :-</th>
                </tr>
              </tfoot>
              </table>
              </Box>
            </Box>
          </Box>
        </AccordionPanel>
        </>
      );
    }
  }
  
  export default OrderList;