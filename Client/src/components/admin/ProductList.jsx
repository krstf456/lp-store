import React from "react";
import {AccordionPanel, Box, Button, Form, FormField, TextInput } from "grommet";
import "./ProductList.css";

import UserContext from '../context/userContext'
import {getFromStorage} from '../../utils/storage'

class ProductList extends React.Component {
  static contextType = UserContext

  constructor(props) {
    super(props);
    this.state = {
      stock_quantity: this.props.productData.stock_quantity,
      updated_stock_quantity: this.props.productData.stock_quantity
    };
  }

  handleChange = (event) => {
    this.setState({ stock_quantity: event.target.value})
  }

  handleClick = () => {
      const obj = getFromStorage('storage-object')
      if (obj && obj.token) {
        const { token } = obj
        const stock_update = {
          stock_quantity: this.state.stock_quantity
        }
        fetch(`http://localhost:5000/products/${this.props.productData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token,
        },
        body: JSON.stringify(stock_update)	
        }).then((res) => res.json())
          .catch(error => console.error('Error:', error))	
          .then(
            this.setState({
              updated_stock_quantity: this.state.stock_quantity
            })
          )
      }
    }
  
  
    render() {
      return (
        <>
        {this.context.renderRedirect()}
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
              <Box style={{margin: "1em"}}>
                {"#: " + this.props.productData._id }<br/>
                {"Artist: " + this.props.productData.artist}<br/>
                {"Album: " + this.props.productData.album}<br/>
                {"Price: " + this.props.productData.price + ":-"}<br/>
                {"Genre: " + this.props.productData.genre}<br/>
                {"Stock: " + this.state.updated_stock_quantity}
              </Box>
              <Box style={{margin: "1em"}}>
                  {"Description: " + this.props.productData.description}
              </Box>
              <Box style={{margin: "1em"}}>
                <Form>
                  <FormField label="Stock Quantity" name="stock_quantity">
                    <TextInput value={this.state.stock_quantity} onChange={this.handleChange} type="number">
                    </TextInput>
                  </FormField>
                  <Button label="Update" onClick={this.handleClick}/>
                </Form>
              </Box>
            </Box>
          </Box>
        </AccordionPanel>
        </>
      );
    }
  }
  
  export default ProductList;
  