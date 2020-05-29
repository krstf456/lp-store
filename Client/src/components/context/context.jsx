import React from 'react';
import Modal from "../modal/modal";

const Context = React.createContext();

export class Provider extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
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

      
    fetch('/products').then((response) => {
      return response.json()
    }).then((products) => {
        getAllProducts(products)
    })

    function getAllProducts() {
      products.forEach(product => {
      }
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
