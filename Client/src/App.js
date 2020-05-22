import React from 'react';
import './App.css';
import MainPage from "./components/mainPage/MainPage"

function App() {
  return (
    <Provider value={this.state}>
    <div className="App">
     <h1>Cleaned workspace :)</h1>
     <MainPage />
    </div>
    </Provider>
  );
}

export default App;
