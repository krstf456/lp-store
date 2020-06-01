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
      showModal: false,
      rock: [],
      soul: [],
      getAllRock: this.getAllRock,
      getAllSoul: this.getAllSoul,
      displayRock: this.displayRock,
      displaySoul: this.displaySoul
    };
  }

  //To open modal call this function on a button
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  //Place modal-content in here
  get modal() {
    if (this.state.showModal) {
      return (
        <Modal>
          <div>
            <h1>MODAL WITH PRODUCTINFO</h1>
          </div>
        </Modal>
      );
    }
    return undefined;
  }

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

  displayRock = () => {
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

  displaySoul = () => {
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



  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
        {this.modal}
      </Context.Provider>
    );
  }
}

export default Context;

export const Consumer = Context.Consumer;
