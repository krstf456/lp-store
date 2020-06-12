import React from "react";
import { Box, ResponsiveContext, Accordion } from "grommet";
import "./Orders.css";
import { Link } from "react-router-dom";
import OrderList from "./OrderList";
import UserContext from "../context/userContext";
import { getFromStorage } from "../../utils/storage";
import "./Admin.css";
import { Rewind } from 'grommet-icons';

class Orders extends React.Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
  }

  componentDidMount = () => {
    this.getOrders();
  };

  getOrders = () => {
    const obj = getFromStorage("storage-object");
    if (obj && obj.token) {
      const { token } = obj;

      fetch("http://localhost:5000/orders", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      })
        .then((res) => res.json())
        .then((response) => {
          if (response) {
            this.setState({
              orders: response,
            });
          }
        });
    }
  };

  render() {
    return (
      <>
        {this.context.renderRedirect()}
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box style={{minHeight: "85vh"}} className="heightContainer">
              <Link to="/admin" style={{marginTop:"1em"}}>
                <Rewind size="large" color="#7D4487"/>
              </Link>
              <h1>Orders</h1>

              <Accordion>
                {this.state.orders.map((order) => (
                  <OrderList key={order._id} orderData={order} />
                ))}
              </Accordion>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </>
    );
  }
}

export default Orders;
