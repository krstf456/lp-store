import React from "react";
import "./App.css";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import MainPage from "./components/mainPage/mainPage";
import Header from "../src/components/header/header";
import Admin from "./components/admin/Admin";
import Orders from "./components/admin/Orders";
import Products from "./components/admin/Products";
import UploadProduct from "./components/admin/UploadProduct";
import Users from "./components/admin/Users";

import Checkout from "../src/components/checkout/Checkout";
import ProductPage from "../src/components/productPage/ProductPage";
import { Provider } from "./components/context/context";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {UserProvider} from './components/context/userContext'
import Dashboard from './components/dashboard/Dashboard'
import {ShoppingCartProvider} from './components/context/shoppingCartContext'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      	<UserProvider value={this.state}>
        <ShoppingCartProvider>

        <Provider value={this.state}>
          <div className="App">
            <Grommet theme={grommet}>
              <Dashboard/>
              <Header />
              <Switch>
              <Route
                path="/checkout/"
                component={Checkout}
              ></Route>
              <Route
                path="/productpage/:id"
                component={ProductPage}
              ></Route>
              <Route
                path="/admin/orders"
                component={Orders}
              ></Route>
              <Route
                path="/admin/products"
                component={Products}
              ></Route>
              <Route
                path="/admin/uploadproduct"
                component={UploadProduct}
              ></Route>
              <Route
                path="/admin/users"
                component={Users}
              ></Route>
              <Route
                path="/admin/"
                component={Admin}
              ></Route>
              <Route
                path="/"
                component={MainPage}
              ></Route>
              </Switch>
            </Grommet>
          </div>
        </Provider>
        </ShoppingCartProvider>

        </UserProvider>
      </BrowserRouter>
    );
  }

}

export default App
