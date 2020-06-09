import React from "react";
import { Box, ResponsiveContext, Accordion } from "grommet";
import "./Orders.css"
import { Link } from "react-router-dom";
import OrderList from "./OrderList"

import UserContext from '../context/userContext'
import {getFromStorage} from '../../utils/storage'

class Orders extends React.Component {
  static contextType = UserContext

  constructor() {
    super();
    this.state = {
      orders: []
    };
  }
  
    componentDidMount = () => {

      const obj = getFromStorage('storage-object')
      if (obj && obj.token) {
         const { token } = obj

      fetch('http://localhost:5000/orders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token,
      },
      }).then((res) => res.json())
         .then((response) => {
            if (response) {
              this.setState({
                  orders: response,
              })       
            }
        })
      }
    }

    render() {
      return (
        <>
        {this.context.renderRedirect()}
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box>
              <Link to="/admin">
                <h1>←</h1>
              </Link>
              <Box
              justify="center"
              align="center"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            > 
          </Box>
            <Box>
            <table>
              <tr style={{ background: "orange"}}>
                <th>Order Id</th>
                <th>Order Sent</th>
                <th>Payment Method</th>
                <th>Total Price</th>
                
                <th>First Name</th>
                <th>Last Name</th>
                <th>Street</th>
                <th>Postal Code</th>
                <th>City</th>

                <th>Products</th>
                <th>Product Id</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Quantity</th>
                <th>Product ID</th>
                <th>Price</th>
              </tr>
              {this.state.orders.map((order, index) =>(
              <tr key={index} style={{ background: "#008080", color: "white" }}>
                <td>{order._id}</td>
                <td>{order.sent}</td>
                <td>{order.payment_method}</td>
                <td>{order.total_price}</td>
            
                <td>{order.adress[0].first_name}</td>
                <td>{order.adress[0].last_name}</td>
                <td>{order.adress[0].street_address}</td>
                <td>{order.adress[0].postcode}</td>
                <td>{order.adress[0].city}</td>

                <td>{<div
                      style={{ backgroundImage: `url(${order.products[0].image})` }}
                      className="img"
                    ></div>}</td>
                <td>{order.products[0]._id}</td>
                <td>{order.products[0].artist}</td>
                <td>{order.products[0].album}</td>
                <td>{order.products[0].quantity}</td> 
                <td>{order.products[0]._id}</td>
                <td>{order.products[0].price}</td>
              </tr>
             ))}
              </table>
            </Box>
            
            </Box>
          )}
        </ResponsiveContext.Consumer>
        </>
      );
    }
  }
  
  export default Orders;
  