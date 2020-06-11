import React from "react";
import { Box, ResponsiveContext, Accordion } from "grommet";
import "./Orders.css"
import { Link } from "react-router-dom";
import OrderList from "./OrderList"

import UserContext from '../context/userContext'
import {getFromStorage} from '../../utils/storage'
import "./Admin.css";

class Orders extends React.Component {
  static contextType = UserContext

  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }
  
    componentDidMount = () => {
      this.getOrders()
    }

    getOrders = () => {
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
            <Box className="adminContainer">
              <Link to="/admin">
                <h1>←</h1>
              </Link>
              <h1>Orders</h1>
             
              <Accordion>  
              {this.state.orders.map((order) =>
                <OrderList 
                    key={order._id} 
                    orderData={order}
                />
              )}
              </Accordion>
            </Box>
          )}
        </ResponsiveContext.Consumer>
        </>
      );
    }
  }
  
  export default Orders;