import React from "react";
import "./UploadProduct.css"
import { Box, Button, Form, FormField, Select, TextInput } from "grommet";


class UploadProduct extends React.Component {
  constructor() {
    super()
      this.state = {
          artist: "",
          album: "",
          description: "",
          price: "",
          stock_quantity: "",
          genre: "",
        }      
    }
    handleInput = (event) => {
      const {name, value} = event.target
      this.setState({
          [name]: value
      }) 
    }

    submit = () => {
      console.log(
        {
          artist: this.state.artist,
          album: this.state.album,
          description: this.state.description,
          price: this.state.price,
          stock_quantity: this.state.stock_quantity,
          genre: this.state.genre
        }
      )
    }
  
    render() {
      const options = [
        { label: "Psychedelic", value: "Psychedelic" },
        { label: "Pop", value: "Pop" },
        { label: "Rock", value: "Rock" },
        { label: "Prog", value: "Prog" },
        { label: "Soul", value: "Soul" }
      ];
      return (
        <Box className="uploadBox">
          <Form>
            <FormField label="Artist" required>
              <TextInput name="artist" 
                        value={this.state.artist} 
                        onChange={this.handleInput} 
                      />
            </FormField>
            <FormField label="Album" required>
              <TextInput name="album" 
                        value={this.state.album} 
                        onChange={this.handleInput} 
                      />
            </FormField>
            <FormField label="Description" required>
              <TextInput name="description" 
                        value={this.state.description} 
                        onChange={this.handleInput} 
                      />
            </FormField>
            <FormField label="Price" required>
              <TextInput name="price" 
                        value={this.state.price} 
                        onChange={this.handleInput} 
                      />
            </FormField>
            <FormField label="Stock Quantity" required>
              <TextInput name="stock_quantity" 
                        value={this.state.stock_quantity} 
                        onChange={this.handleInput} 
                      />
            </FormField>
            <Select
              name="genre" 
              placeholder="Genre" 
              options={options}
              labelKey="label"
              valueKey={this.state.genre} 
              onChange={this.handleInput} 
            />
            <Button type="submit" label="Submit" onClick={this.submit}/>
          </Form>
        </Box>
      );
    }
  }
  
  export default UploadProduct;
  
/*
  artist: {
    type: String,
    required: true
},
album: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
},
price: {
    type: Number,
    required: true
},
stock_quantity: {
    type: Number,
    required: true
},
image: {
    //type: mongoose.Types.ObjectId,
    type: String,
    required: true
},
genre: {
    type: String,
    required: true

*/