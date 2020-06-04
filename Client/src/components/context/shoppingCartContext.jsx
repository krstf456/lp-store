import React, { useContext } from "react";

const ShoppingCartContext = React.createContext()


export class ShoppingCartProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCart: [
       
      ],
      

      addToCart: this.addToCart,
      totalQuantity: this.totalQuantity,
      
    };

    
  }



  // addToCart = (productId) => {
  //     alert('added to cart')
  //     console.log(this.state.shoppingCart)
  //   const inCart = this.state.shoppingCart.some(
  //     (element) => element._id === productId)
    
  //   const cloneCart = Object.assign([], this.state.shoppingCart)

  //   if(!inCart) {
  //     let newCartItem = {
  //       _id: productId,
        
  //     }
  //   cloneCart.push(newCartItem)
  //   } 
  //   // else {
  //   //   const findItem = newCart.find(
  //   //     (element) => element._id === productId)
  //   // }
  //   this.setState( { shoppingCart: cloneCart })
  //   }

    // // itemQuantity = () => {
      
    // //   let itemQuantity = 0
    // //   let itemInCart = this.state.
      
  
    // // };
    

 

  


  

  render() {
    return (
      <ShoppingCartContext.Provider
        value={{
          state: this.state,
          addToCart: this.addToCart,
          
          
        }}
      >
        {this.props.children}
      </ShoppingCartContext.Provider>
    );
  }
}
export default ShoppingCartContext
export const Consumer = ShoppingCartContext.Consumer



