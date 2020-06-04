import React, { useContext } from "react";

export const ShoppingCartContext = React.createContext();

export default class ShoppingCartProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCart: [],
      
      
    };

    
    this.clearShoppingCart = this.clearShoppingCart.bind(this);
  }

 

  clearShoppingCart = () => {
    this.setState({shoppingCart: []})
  } 

  addToCart = (productId, artist, price) => {
      console.log('Added to cart')
    const inCart = this.state.shoppingCart.some(
      (element) => element._id === productId)
    
    const newCart = Object.assign([], this.state.shoppingCart)

    if(!inCart) {
      let newCartItem = {
        _id: productId,
        artist: artist,
        price: price,
      }
    newCart.push(newCartItem)
    } 
    // else {
    //   const findItem = newCart.find(
    //     (element) => element._id === productId)
    // }
    this.setState( { shoppingCart: newCart })
    }

    

 

  


  

  render() {
    return (
      <CartContext.Provider
        value={{
          state: this.state,
          addToCart: this.addToCart,
          
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
export const CartConsumer = CartContext.Consumer;