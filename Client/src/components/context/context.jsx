import React from 'react';
import Modal from "../modal/modal";
import axios from "axios";


const Context = React.createContext();

export class Provider extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            products: [],
            getAllProducts: this.getAllProducts,
            displayAllProducts: this.displayAllProducts,
        }
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

   /*    
    fetch('/products').then((response) => {
      return response.json()
    }).then((products) => {
        getAllProducts(products)
    })

    function getAllProducts() {
      products.forEach(product => {
      }
    } */

    getAllProducts = () => {
      axios
      .get("http://localhost:5000/products/products")
      .then((response) => {
        console.log("response", response.data)
        this.setState({ products: response.data });
      })
    }

    displayAllProducts = () => {
      if (!this.state.products.length) return null;

      return this.state.products.map((product, index) => (
        <div
          key={index}
          style={{
            borderRadius: "1rem",
            backgroundColor: "white",
            margin: "0 3rem 1rem 3rem",
            padding: "0.5rem",
          }}
        >
          <h3 style={{ textAlign: "left", margin: "0.5rem" }}>
            {product.album}
          </h3>
        </div>
      ));

    }

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
