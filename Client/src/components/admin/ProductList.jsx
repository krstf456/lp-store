import React from "react";
import {AccordionPanel, Box, Select } from "grommet";
import "./ProductList.css";


class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onChange = (event) => {
    this.setState({
      genre: event.target.value
    }) 
  }

  
    render() {
      const options = ["Rock", "Prog", "Psycadelic", "Pop", "Soul", "Other"];
      return (
        <AccordionPanel label={"* " + this.props.productData.album}>
          <Box background="light-2" overflow="auto" style={{padding: "1em"}}>
          <Box
              justify="center"
              align="center"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{ backgroundImage: `url(${this.props.productData.image})` }}
                className="imgStyle"
              ></div>
              <Box>
                {"#: " + this.props.productData._id }<br/>
                {"Artist: " + this.props.productData.artist}<br/>
                {"Album: " + this.props.productData.album}<br/>
                {"Description: " + this.props.productData.description}
              </Box>
              <Box>
                {"Price: " + this.props.productData.price + ":-"}<br/>
                {"Genre: " + this.props.productData.genre}<br/>
                {"Stock: " + this.props.productData.stock_quantity}
              </Box>
            </Box>
          </Box>
        </AccordionPanel>
      );
    }
  }
  
  export default ProductList;
  