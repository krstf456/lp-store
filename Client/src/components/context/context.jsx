import React from "react";
import Modal from "../modal/modal";
import axios from "axios";
import { Box } from "grommet";
import { Link } from "react-router-dom";

const Context = React.createContext();

export class Provider extends React.Component {
  constructor() {
    super();
    this.state = {
      rock: [],
      soul: [],
      pop: [],
      getAllRock: this.getAllRock,
      getAllSoul: this.getAllSoul,
      getAllPop: this.getAllPop,
      displayAllRock: this.displayAllRock,
      displayAllSoul: this.displayAllSoul,
      displayAllPop: this.displayAllPop
    };
  }

  getAllProducts = () => {
    axios.get("http://localhost:5000/products").then((response) => {
      this.setState({ products: response.data });
    });
  };


  getAllRock = () => {
    axios.get("http://localhost:5000/products/products/Rock").then((response) => {
      console.log("response", response.data);
      this.setState({ rock: response.data });
    });
  };

  getAllSoul = () => {
    axios.get("http://localhost:5000/products/products/Soul").then((response) => {
      console.log("response", response.data);
      this.setState({ soul: response.data });
    });
  };

  getAllPop = () => {
    axios.get("http://localhost:5000/products/products/Pop").then((response) => {
      console.log("response", response.data);
      this.setState({ pop: response.data });
    });
  };

  displayAllRock = () => {
    if (!this.state.rock.length) return null;

    return this.state.rock.map((product, index) => (
      <Link to="/productpage/">
        <Box key={index} height="20rem" width="20rem" margin="large" background="purple">
          <img src={product.image}/>
          <h3>{product.album}</h3>
          <h4>{product.artist}</h4>
          <p>{product.price}</p>
        </Box>
      </Link>
    ));
  };

  displayAllSoul = () => {
    if (!this.state.soul.length) return null;

    return this.state.soul.map((product, index) => (
      <Link to="/productpage/">
        <Box key={index} height="20rem" width="20rem" margin="large" background="purple">
          <img src={product.image}/>
          <h3>{product.album}</h3>
          <h4>{product.artist}</h4>
          <p>{product.price}</p>
        </Box>
      </Link>
    ));
  };

  displayAllPop = () => {
    if (!this.state.pop.length) return null;

    return this.state.pop.map((product, index) => (
      <Link to="/productpage/">
        <Box key={index} height="20rem" width="20rem" margin="large" background="purple">
          <img src={product.image}/>
          <h3>{product.album}</h3>
          <h4>{product.artist}</h4>
          <p>{product.price}</p>
        </Box>
      </Link>
    ));
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;

export const Consumer = Context.Consumer;
