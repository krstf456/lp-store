import React from "react";
import axios from "axios";
import { Box, Button } from "grommet";
import { Link } from "react-router-dom";
import style from "./Context.css";
import AddtoCartButton from "../checkout/AddToCart";

const Context = React.createContext();

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      rock: [],
      soul: [],
      pop: [],
      getAllRock: this.getAllRock,
      getAllSoul: this.getAllSoul,
      getAllPop: this.getAllPop,
      displayAllRock: this.displayAllRock,
      displayAllSoul: this.displayAllSoul,
      displayAllPop: this.displayAllPop,
      addToCart: this.addToCart,
      shoppingCart : [],
      getOneProduct: this.getOneProduct,
      displayOneProduct: this.displayOneProduct,
    };
  }

  getAllProducts = () => {
    axios.get("http://localhost:5000/products").then((response) => {
      this.setState({ allProducts: response.data });
    });
  };

  getAllRock = () => {
    axios.get("http://localhost:5000/products/Rock").then((response) => {
      //console.log("response", response.data)
      this.setState({ rock: response.data });
    });
  };

  getAllSoul = () => {
    axios.get("http://localhost:5000/products/Soul").then((response) => {
      this.setState({ soul: response.data });
    });
  };

  getAllPop = () => {
    axios.get("http://localhost:5000/products/Pop").then((response) => {
      this.setState({ pop: response.data });
    });
  };
  

  displayAllRock = () => {
    if (!this.state.rock.length) return null;

    return this.state.rock.map((product, index) => (
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
          {/* <AddtoCartButton/> */}
      </Box>
    ));
  };

  displayAllSoul = () => {
    if (!this.state.soul.length) return null;

    return this.state.soul.map((product, index) => (
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
          onClick={() => this.addToCart()}>ADDTOCART</Button>
          {/* <AddtoCartButton/> */}
      </Box>
    ));
  };

  displayAllPop = () => {
    if (!this.state.pop.length) return null;

    return this.state.pop.map((product, index) => (
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
      </Link>
          <Button
          onClick={() => this.addToCart()}>ADDTOCART</Button>
          {/* <AddtoCartButton/> */}
        </Box>
    ));
  };
 
  getOneProduct = async (id) => {
    const response = await axios.get(`http://localhost:5000/product/${id}`)
    this.setState({ product: response.data });
    return response.data
  };

  displayOneProduct = () => {
    if (!this.state.product) return null;

     return(
      <Box className="boxStyle">
          <div style={{backgroundImage: `url(${this.state.product.image})`}} className="imgStyle"></div>
          <h3>{this.state.product.album}</h3>
          <h4>{this.state.product.artist}</h4>
          <p>{this.state.product.price}</p>
          <p>{this.state.product.genre}</p>
          <p>{this.state.product.description}</p>
          <Button label="Add to cart" onClick={() => {this.addToCart()}}></Button>
        </Box>
     )
  }; 

  addToCart = (product) => {
    this.state.shoppingCart.push(product)
    alert("Item added to cart")
    console.log("shoppingcart", this.state.shoppingCart)
    this.setState({ shoppingCart: this.state.shoppingCart})
    localStorage.setItem("cart" , this.state.shoppingCart)

   
  
    
      
     /* const inCart = this.state.shoppingCart.some(
      (element) => element._id === this.state.allProducts._id) 
    
    const newCart = Object.assign([], this.state.shoppingCart)

    for (const item of newCart) {

    }
    if(!inCart) {
      let newCartItem = {
        productId: this.state.allProducts._id,
        artist: this.state.allProducts.artist,
        price: this.state.allProducts.price,
      }
    newCart.push(newCartItem)
    } 
    this.setState( { shoppingCart: newCart })  */
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
