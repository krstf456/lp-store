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
      products: [],
      getAllProducts: this.getAllProducts,
      displayAllProducts: this.displayAllProducts,
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

  getAllProducts = () => {
    axios.get("http://localhost:5000/products/products").then((response) => {
      console.log("response", response.data);
      this.setState({ products: response.data });
    });
  };

  displayAllProducts = () => {
    if (!this.state.products.length) return null;

    return this.state.products.map((product, index) => (
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
