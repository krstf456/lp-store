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
              <h1>Orders</h1>
              <p>Uppgifter</p>
              <p>See Order History G</p>
              <p>Mark as shipped VG </p>
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
  