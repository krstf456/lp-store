import React from "react";
import "./App.css";
import MainPage from "./components/mainPage/mainPage";
import Header from "../src/components/header/header";
import { Provider } from "./components/context/context";

class App extends React.Component {
  render() {
    return (
      <Provider value={this.state}>
        <div className="App">
          <Header/>
          <MainPage />
        </div>
      </Provider>
    );
  }
}

export default App;
