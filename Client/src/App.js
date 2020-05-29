import React from "react";
import "./App.css";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import MainPage from "./components/mainPage/mainPage";
import Header from "../src/components/header/header";
import { Provider } from "./components/context/context";

class App extends React.Component {
  render() {
    return (
      <Provider value={this.state}>
        <div className="App">
          <Grommet theme={grommet}>
            <Header />
            <MainPage />
          </Grommet>
        </div>
      </Provider>
    );
  }
}

export default App;
