import React from "react";
import "./App.css";
import MainPage from "./components/mainPage/MainPage";
import Header from "../src/components/header/Header";
import { Provider } from "./components/context/Context";

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
