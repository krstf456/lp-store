import React from "react";
import { Link } from 'react-router-dom'
import Context from "../context/context";
import { Box, ResponsiveContext, Menu, Button } from "grommet";
import "./MainPage.css"
import flower from "./flower11.png";

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: ['', 'Rock', 'Soul', 'Pop', 'Psychedelic', 'Prog', 'Other'],
      activeCategory: ''
    }
  }
  //This will enable the use of context-functions and states
  static contextType = Context;

  componentDidMount = () => {
    this.context.updateProducts(this.state.activeCategory)

      if(localStorage.getItem('cart') === null){
      localStorage.setItem('cart', JSON.stringify([]))
      }
      this.setState({
      shoppingCart: JSON.parse(localStorage.getItem("cart"))
      })
    }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.activeCategory !== this.state.activeCategory) {
      this.context.updateProducts(this.state.activeCategory)
    }
  }

  handleOnClickAll = () => {
    this.setState({ activeCategory: '' })
    console.log(this.state.activeCategory)
  }

  handleOnClickRock = () => {
    this.setState({ activeCategory: 'Rock' })
    console.log(this.state.activeCategory)
  }

  handleOnClickSoul = () => {
    this.setState({ activeCategory: 'Soul' })
    console.log(this.state.activeCategory)
  }

  handleOnClickPop = () => {
    this.setState({ activeCategory: 'Pop' })
    console.log(this.state.activeCategory)
  }

  handleOnClickPsychedelic = () => {
    this.setState({ activeCategory: 'Psychedelic' })
    console.log(this.state.activeCategory)
  }

  handleOnClickProg = () => {
    this.setState({  activeCategory: 'Prog'})
    console.log(this.state.activeCategory)
  }

  handleOnClickOther = () => {
    this.setState({ activeCategory: 'Other' })
    console.log(this.state.activeCategory)
  }

  render() {
    
    return (
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box>
            <Box align="center" pad="xlarge">
              <Menu
                className="dropDown"
                dropProps={{
                  align: { top: "bottom", left: "left" },
                  elevation: "xlarge"
                }}
                label="Genre"
                style={{
                  fontFamily: 'Spicy Rice',
                  color: "wheat"
                }}
                items={[
                  { label: "All Albums", onClick: () => {this.handleOnClickAll()} },
                  { label: "Rock", onClick: () => {this.handleOnClickRock()} },
                  { label: "Soul", onClick: () => {this.handleOnClickSoul()} },
                  { label: "Pop", onClick: () => {this.handleOnClickPop()} },
                  { label: "Psychedelic", onClick: () => {this.handleOnClickPsychedelic()} },
                  { label: "Prog", onClick: () => {this.handleOnClickProg()} },
                  { label: "Other", onClick: () => {this.handleOnClickOther()} },
                ]}
              />
            </Box>
            <Box
              justify="center"
              align="center"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            > 
              {this.context.products.map(product => {
                return (
                <Box key={product._id} className="boxStyle">
                <Link style={{ textDecoration: 'none'}}
                  to={{
                    pathname: "/productpage/" + product._id,
                  }}
                >
                  <div
                    style={{ backgroundImage: `url(${product.image})`, height: "18rem",
                    width: "18rem"}}
                    className="imgStyle"
                  ></div> 
                  <Box 
                    style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}>
                    <Box style={{
                      display: "flex",
                      flexDirection: "column",
                      
                    }}>
                      <Box 
                        className="albumText"
                      >
                        <p>{product.artist}</p>
                      </Box>
                      <Box>
                        <h5>{product.album}</h5>
                      </Box>
                    </Box>
                    <Box  
                      style={{
                      display: "flex",
                      flexDirection: "row"
                      }}
                    >
                      <img className="flower" src={flower} alt="flower" />
                      <h5>{product.price} :-</h5>
                  </Box>
                </Box>
                </Link>
                <Button
                   onClick={() => this.context.addToCart(product)}>
                     <h3>ADD TO CART</h3>
                </Button>
                </Box>
                )
              })}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}


export default MainPage;