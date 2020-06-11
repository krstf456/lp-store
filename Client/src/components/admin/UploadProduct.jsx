import React from "react";
import "./UploadProduct.css"
import { Box, Button, Form, FormField, TextInput } from "grommet";
import { Link } from "react-router-dom";

import UserContext from '../context/userContext'
import {getFromStorage} from '../../utils/storage'
import "./Admin.css";
import { Rewind } from 'grommet-icons';

class UploadProduct extends React.Component {

  static contextType = UserContext

  constructor() {
    super()
      this.state = {
          image: "",
          artist: "",
          album: "",
          description: "",
          price: "",
          stock_quantity: "",
          genre: "",
          errorMessage: ""
        }      
    }
    handleInput = (event) => {
      const {name, value} = event.target
      this.setState({
          [name]: value
      }) 
    }

    handleChange = (event) => {
      this.setState({
        image: event.target.files[0]
      })
    }

    
    submit = async() => {
      const obj = getFromStorage('storage-object')
      if (obj && obj.token) {
        const { token } = obj
        const isValidated = this.validateInput()
        if(isValidated){

        const fd = new FormData();
        fd.append('image', this.state.image);
        
        try {

          // `POST` image
          let response = await fetch('http://localhost:5000/uploads/', {
              method: 'POST',
              body: fd,
              'auth-token': token
          })
          const imageDocument = await response.json()
          
          if(response.message){
              this.setState({
                  errorMessage: response.message,
              })
              return
          }

          // `POST` album
          const product = {
              "artist": this.state.artist,
              "album": this.state.album,
              "description": this.state.description,
              "price": parseInt(this.state.price),
              "stock_quantity": parseInt(this.state.stock_quantity),
              "image": `http://localhost:5000/uploads/${imageDocument._id}` ,
              "genre": this.state.genre
            }
          response = await fetch(`http://localhost:5000/products`,{
              method: 'POST',
              headers: {
                  "Content-Type" : "application/json",
                  'auth-token': token
              },
              body: JSON.stringify(product)
          })
        
          
          if(response.message) {
              this.setState({
                  errorMessage: response.message,
              })
          }
          else {
            this.setState({
                errorMessage: "Wow dude. The album is uploaded",
                artist: "", album: "", description: "", price: "", stock_quantity: "", genre: ""
            })
          }
        } catch(error) {
          console.error(error)
        }
      }}
    }

    validateInput = () => {
      let isCorrect = true
      const price = parseInt(this.state.price)
      const stock_quantity = parseInt(this.state.stock_quantity)
      const image = this.state.image;

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
          errorMessage: "Some data is, like missing or stuff.",
        })
      } else if(
        isNaN(price) ||
        isNaN(stock_quantity)
      ){
        isCorrect = false
        this.setState({
          errorMessage: "Dude. That's not a number. Try something. Like 4...",
        })
      } else if(image === ""){
        this.setState({
          errorMessage: 'Man. A album cover would be nice. '
        })
      } else if(!['image/jpeg', 'image/gif', 'image/png'].includes(image.type)) {
        this.setState({
          errorMessage: "Dude. That's not a picture. Not cool."
        })
      } else if(image.size > 2 * 1024 * 1024) { // check file size (< 2MB)
        this.setState({
          errorMessage: 'It would be groovy i the file was smaller than 2MB.'
        })
      }
      return isCorrect
    }
  
    render() {
      return (
        <>
        {this.context.renderRedirect()}
        <Box style={{minHeight: "85vh"}} className="uploadBox">
          <Link to="/admin" style={{marginTop:"1em"}}>
            <Rewind size="large" color="#7D4487"/>
          </Link>
          <Form>
            <FormField label="Album Cover">
              <input type="file" name="image" onChange={this.handleChange}/>
            </FormField>
            <FormField label="Artist">
              <TextInput name="artist" 
                        value={this.state.artist}
                        style={{textAlign:"center"}}
                        onChange={this.handleInput} 
                      />
            </FormField>
            <FormField label="Album" >
              <TextInput name="album" 
                        value={this.state.album} 
                        style={{textAlign:"center"}}
                        onChange={this.handleInput} 
                      />
            </FormField>
            <FormField label="Description" >
              <TextInput name="description" 
                        style={{textAlign:"center"}}
                        value={this.state.description} 
                        onChange={this.handleInput} 
                      />
            </FormField>
            <FormField label="Price" >
              <TextInput name="price" 
                        style={{textAlign:"center"}}
                        value={this.state.price} 
                        onChange={this.handleInput} 
                        type="number"
                      />
            </FormField>
            <FormField label="Stock Quantity" >
              <TextInput name="stock_quantity" 
                        value={this.state.stock_quantity} 
                        onChange={this.handleInput}
                        style={{textAlign:"center"}}
                        type="number"
                      />
            </FormField>
            <FormField label="Genre" >
              <TextInput name="genre" 
                        value={this.state.genre} 
                        style={{textAlign:"center"}}
                        onChange={this.handleInput} 
                      />
            </FormField>
            <p style={{color: "red"}}>{this.state.errorMessage}</p>
            <Button type="submit" label="Submit" onClick={this.submit}/>
          </Form>
        </Box>
        </>
      );
    }
  }
  
  export default UploadProduct;
