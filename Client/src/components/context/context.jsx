import React from "react";
import axios from "axios";
import { Box } from "grommet";
import { Link } from "react-router-dom";
import style from "./Context.css";
import AddtoCartButton from "../checkout/AddToCart";

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
      displayAllPop: this.displayAllPop,
      shoppingCart : [
        {
          artist: "Bob Dylan",
          price: 199,
        }
      ]
    };
  }

  getAllProducts = () => {
    axios.get("http://localhost:5000/products").then((response) => {
      this.setState({ products: response.data });
    });
  };


  getAllRock = () => {
    axios.get("http://localhost:5000/products/Rock").then((response) => {
      console.log("response", response.data);
      this.setState({ rock: response.data });
    });
  };

  getAllSoul = () => {
    axios.get("http://localhost:5000/products/Soul").then((response) => {
      console.log("response", response.data);
      this.setState({ soul: response.data });
    });
  };

  getAllPop = () => {
    axios.get("http://localhost:5000/products/Pop").then((response) => {
      console.log("response", response.data);
      this.setState({ pop: response.data });
    });
  };

  displayAllRock = () => {
    if (!this.state.rock.length) return null;

    return this.state.rock.map((product, index) => (
      <Link to="/productpage/">
        <Box key={index} className="boxStyle">
          <div style={{backgroundImage: `url(${product.image})`}} className="imgStyle"></div>
          <h3>{product.album}</h3>
          <h4>{product.artist}</h4>
          <p>{product.price}</p>
          <AddtoCartButton/>
        </Box>
      </Link>
    ));
  };

  displayAllSoul = () => {
    if (!this.state.soul.length) return null;

    return this.state.soul.map((product, index) => (
      <Link to="/productpage/">
        <Box key={index} className="boxStyle">
          <div style={{backgroundImage: `url(${product.image})`}} className="imgStyle"></div>
          <h3>{product.album}</h3>
          <h4>{product.artist}</h4>
          <p>{product.price}</p>
          <AddtoCartButton/>
        </Box>
      </Link>
    ));
  };

  displayAllPop = () => {
    if (!this.state.pop.length) return null;

    return this.state.pop.map((product, index) => (
      <Link to="/productpage/">
        <Box key={index} className="boxStyle" >
          <div style={{backgroundImage: `url(${product.image})`}} className="imgStyle"></div>
          <h3>{product.album}</h3>
          <h4>{product.artist}</h4>
          <p>{product.price}</p>
          <AddtoCartButton/>
        </Box>
      </Link>
    ));
  };

  addToCart = (productId, artist, price) => {
    const inCart = this.state.shoppingCart.some(
      (element) => element._id === productId)
    
    const newCart = Object.assign([], this.state.cart)

    if(!inCart) {
      let newCartItem = {
        _id: productId,
        artist: artist,
        price: price,
      }
    newCart.push(newCartItem)
    } else {
      const findItem = newCart.find(
        (element) => element._id === productId)
    }
    this.setState( { shoppingCart: newCart })
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
