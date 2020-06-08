import React from "react";
import axios from "axios";
import { Box, Button } from "grommet";
import { Link } from "react-router-dom";
import style from "./Context.css";
//import AddtoCartButton from "../checkout/AddToCart";

const Context = React.createContext();

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      updateProducts: this.updateProducts,
      shippingAlternatives: [],
      selectedShipping: [],
      addToCart: this.addToCart,
      increaseQuantity: this.increaseQuantity,
      decreaseQuantity: this.decreaseQuantity,
      deleteProduct: this.deleteProduct,
      shoppingCart : [],
      getOneProduct: this.getOneProduct,
      //displayOneProduct: this.displayOneProduct,
      getAllShipping: this.getAllShipping,
      setSelectedShipping: this.setSelectedShipping,
      displayAllAlbums: this.displayAllAlbums,
      calculateSum: this.calculateSum
    };
  }


  updateProducts = (genre) => {
    axios.get("http://localhost:5000/products/" + genre).then((response) => {
      this.setState({ products: response.data });
    });
  };


  displayAllAlbums = () => {
    if (!this.state.products.length) return null;
    
    return this.state.products.map((product, index) => (
      <Box key={index} className="boxStyle">
      <Link
        to={{
          pathname: "/productpage/" + product._id,
        }}
      >
        <div
          style={{ backgroundImage: `url(${product.image})` }}
          className="imgStyle"
        ></div>
        <h3>{product.album}</h3>
        <h4>{product.artist}</h4>
        <p>{product.price}</p>
        <p>{product.genre}</p>
      </Link>
      <Button
          onClick={() => this.addToCart(product)}>ADDTOCART</Button>
    </Box>
    ));
  };


  componentDidMount = () => {
    if(localStorage.getItem('cart') === null){
      localStorage.setItem('cart', JSON.stringify([]))
    }
    this.setState({
      shoppingCart: JSON.parse(localStorage.getItem("cart"))
    })
  }


  componentDidMount = () => {
    this.setState({
      shoppingCart: JSON.parse(localStorage.getItem("cart"))
    })
  }

  getOneProduct = async (id) => {
    const response = await axios.get(`http://localhost:5000/product/${id}`)
    const product = response.data
    console.log(product)
      return product
  };


  addToCart = (product) => {
    const alreadyInCart = this.state.shoppingCart.some((element) => element.product._id === product._id)
    const cloneShoppingCart = Object.assign([], this.state.shoppingCart);
    const productInCart = cloneShoppingCart.find((element) => element.product._id === product._id);

    console.log(alreadyInCart)
    if(productInCart.quantity >= product.stock_quantity){
      alert('This article is out of stock.')
      return
      }
    if(alreadyInCart) {
      
      console.log('test')
      const existingItem = cloneShoppingCart.find((element) => element.product._id === product._id)
      existingItem.quantity = existingItem.quantity + 1

      
    } else {
      const itemInCart = {product: product, quantity: 1}

      cloneShoppingCart.push(itemInCart)
    }
    
    
    alert("Item added to cart")
    console.log("shoppingcart", cloneShoppingCart)
    
    this.setState({ shoppingCart: cloneShoppingCart})
    localStorage.setItem("cart" , JSON.stringify(cloneShoppingCart))
    
 }

 increaseQuantity = async (product) => {
  const cloneShoppingCart = Object.assign([], this.state.shoppingCart);
  const productInCart = cloneShoppingCart.find((element) => element.product._id === product._id);
  productInCart.quantity = productInCart.quantity + 1;

  if(productInCart.quantity >= product.stock_quantity){
    alert('This article is out of stock.')
    return
    }
  
  this.setState({ shoppingCart: cloneShoppingCart });
  localStorage.setItem("cart" , JSON.stringify(cloneShoppingCart))

 }

 decreaseQuantity = (product) => {
  const cloneShoppingCart = Object.assign([], this.state.shoppingCart);
  console.log(product, cloneShoppingCart)
  const productInCart = cloneShoppingCart.find((element) => element.product._id === product._id);
  
  


  if (productInCart.quantity <= 1) {
    
     const removeProduct = cloneShoppingCart.findIndex(
       (element) => element.product._id === product._id
       );
       
       cloneShoppingCart.splice(removeProduct, 1);
    }
    productInCart.quantity = productInCart.quantity - 1;
  this.setState({ shoppingCart: cloneShoppingCart });
  
 localStorage.setItem("cart" , JSON.stringify(cloneShoppingCart))
};

deleteProduct = (product) => {
  console.log('deletePr')
  const cloneShoppingCart = Object.assign([], this.state.shoppingCart);
  
  const productInCart = cloneShoppingCart.find((element) => element.product._id === product._id);
  
  


  if (productInCart) {
    
     const removeProduct = cloneShoppingCart.findIndex(
       (element) => element.product._id === product._id
       );
       
       cloneShoppingCart.splice(removeProduct, 1);
    }
    productInCart.quantity = productInCart.quantity - 1;
  this.setState({ shoppingCart: cloneShoppingCart });
  
 localStorage.setItem("cart" , JSON.stringify(cloneShoppingCart))
}


calculateSum = () => {
  let sum = 0
  for (let i = 0; i < this.state.shoppingCart.length ; i++){
     sum = this.state.shoppingCart[i].product.price * this.state.shoppingCart[i].quantity + sum
  }
  return sum
}


  getAllShipping = () => {
    axios.get("http://localhost:5000/shipping").then((response) => {
      this.setState({ shippingAlternatives: response.data });
      this.state.shippingAlternatives.map(shipping => {
        return shipping.shipping_time
      })
    });
  };

  setSelectedShipping = (shipping) => {
    this.setState({ selectedShipping: shipping})
  }

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
