import React from "react";
import axios from "axios";
import { Box, ResponsiveContext, Accordion } from "grommet";
import "./Orders.css"
import { Link } from "react-router-dom";
import OrderList from "./OrderList"

class Orders extends React.Component {
  constructor() {
    super();
    this.state = {
      orders: []
    };
  }
  
    componentDidMount = () => {
      axios.get("http://localhost:5000/orders").then((response) => {
        this.setState({ orders: response.data});
      });
    };
    
  
    render() {
      console.log(this.state.orders)
      return (
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
      );
    }
  }
  
  export default Orders;
  