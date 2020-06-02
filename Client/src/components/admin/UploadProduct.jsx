import React from "react";
import "./UploadProduct.css"
import { Box, Button, Form, FormField, TextInput } from "grommet";


class UploadProduct extends React.Component {
  constructor() {
    super()
      this.state = {
          artist: "",
          album: "",
          image: "",
          description: "",
          price: "",
          stock_quantity: "",
          genre: "",
          hasError: false,
          errorMessage: ""
        }      
    }
    handleInput = (event) => {
      const {name, value} = event.target
      this.setState({
          [name]: value
      }) 
    }

    submit = async() => {
      const isValidated = this.validateInput()
      if(isValidated){
        const data = {
            "artist": this.state.artist,
            "album": this.state.album,
            "description": this.state.description,
            "price": parseInt(this.state.price),
            "stock_quantity": parseInt(this.state.stock_quantity),
            "image": this.state.image,
            "genre": this.state.genre
          }
          console.log(data)
           fetch(`http://localhost:5000/products`,{
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .catch((err) => {
                console.log(err)
        })
        .then((response) => {
            if(response.message){
                this.setState({
                    errorMessage: response.message,
                    hasError: true
                })
            }
            else{
              this.setState({
                errorMessage: "The album is uploaded",
                hasError: false,
                artist: "", album: "", image: "", description: "", price: "", stock_quantity: "", genre: ""
            })
            }
        })
      }
    }

    validateInput = () => {
      let isCorrect = true
      const price = parseInt(this.state.price)
      const stock_quantity = parseInt(this.state.stock_quantity)

      if(this.state.artist === "" ||
        this.state.album === "" ||
        this.state.artist === "" ||
        this.state.description === "" ||
        this.state.price === "" ||
        this.state.stock_quantity === "" ||
        this.state.genre === ""
      ){
        isCorrect = false
        this.setState({
          errorMessage: "Some data is missing",
          hasError: true
        })
      } else if(
        isNaN(price) ||
        isNaN(stock_quantity)
      ){
        isCorrect = false
        this.setState({
          errorMessage: "Not a number",
          hasError: true
        })
      }
      return isCorrect
    }
  
    render() {
      return (
        <Box className="uploadBox">
          <Form>
            <FormField label="Artist">
              <TextInput name="artist" 
                        value={this.state.artist} 
                        onChange={this.handleInput} 
                      />
            </FormField>
            <FormField label="Album" >
              <TextInput name="album" 
                        value={this.state.album} 
                        onChange={this.handleInput} 
                      />
            </FormField>
            <FormField label="Image" >
              <TextInput name="image" 
                        value={this.state.image} 
                        onChange={this.handleInput} 
                      />
            </FormField>
            <FormField label="Description" >
              <TextInput name="description" 
                        value={this.state.description} 
                        onChange={this.handleInput} 
                      />
            </FormField>
            <FormField label="Price" >
              <TextInput name="price" 
                        value={this.state.price} 
                        value={this.state.price} 
                        onChange={this.handleInput} 
                      />
            </FormField>
            <FormField label="Stock Quantity" >
              <TextInput name="stock_quantity" 
                        value={this.state.stock_quantity} 
                        onChange={this.handleInput} 
                      />
            </FormField>
            <FormField label="Genre" >
              <TextInput name="genre" 
                        value={this.state.genre} 
                        onChange={this.handleInput} 
                      />
            </FormField>
            <p style={{color: "red"}}>{this.state.errorMessage}</p>
            <Button type="submit" label="Submit" onClick={this.submit}/>
          </Form>
        </Box>
      );
    }
  }
  
  export default UploadProduct;
