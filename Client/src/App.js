import React from "react";
import "./App.css";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import MainPage from "./components/mainPage/mainPage";
import Header from "../src/components/header/header";
import Admin from "./components/admin/admin";
import Checkout from "../src/components/checkout/Checkout";
import ProductPage from "../src/components/productPage/ProductPage";
import { Provider } from "./components/context/context";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {UserProvider} from './components/context/userContext'
import Dashboard from './components/dashboard/Dashboard'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      	<UserProvider value={this.state}>
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
                path="/admin"
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
        </UserProvider>
      </BrowserRouter>
    );
  }

}

export default App
