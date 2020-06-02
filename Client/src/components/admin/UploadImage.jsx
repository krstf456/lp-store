import React from "react";
import "./UploadProduct.css"
import { Box, Button} from "grommet";


class UploadImage extends React.Component {
  constructor() {
    super()
      this.state = {
          image: "",
          errorMessage: ""
        }      
    }

    handleChange = event => {
      this.setState({
        image: event.target.files[0]
      })
    }

    submit = () => {
      const image = this.state.image;
      if(image === ""){
        this.setState({
          errorMessage: 'Missing an album cover'
        })
      } else if(!['image/jpeg', 'image/gif', 'image/png'].includes(image.type)) {
        this.setState({
          errorMessage: 'Only images are allowed.'
        })
      } else if(image.size > 2 * 1024 * 1024) { // check file size (< 2MB)
        this.setState({
          errorMessage: 'File must be less than 2MB.'
        })
      } else {
        const fd = new FormData();
        fd.append('image', image);
    
        // send `POST` request
        fetch('http://localhost:5000/uploads', {
            method: 'POST',
            body: fd
        })
        .then((response) => {
            if(response.message){
                this.setState({
                    errorMessage: response.message,
                })
            }
            else{
              this.setState({
                errorMessage: "Image is uploaded",
                image: ""
            })
            }
        })
      }
    }
  
    render() {
      return (
        <Box>
          <form>
            <p style={{color: "red"}}>{this.state.errorMessage}</p>
            <input type="file" name="image" onChange={this.handleChange}/>
            <Button label='Upload image' onClick={this.submit}/>
          </form>
        </Box>
      );
    }
  }
  
  export default UploadImage;
