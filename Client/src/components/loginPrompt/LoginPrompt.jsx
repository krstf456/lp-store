import React from "react";
import UserContext from "../context/userContext";
import "./LoginPrompt.css";
import { Box, Button } from "grommet";
import ErrorAnimation from "../animations/ErrorAnimation";
import { Close } from "grommet-icons";

class LoginPrompt extends React.Component {
  //This will enable the use of context-functions and states
  static contextType = UserContext;

  state = {
    showModal: true,
  };

  //To open modal call this function on a button
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  successfullyCreatedUser = () => {
    alert("Wow, man. You one of us now!");
  };

  //Place modal-content in here
  get modal() {
    if (this.state.showModal) {
      return (
        <>
          <Box
            id="loginPrompt"
            style={{
              display: "flex",
              position: "sticky",
              alignSelf: "center",
              height: "0rem",
            }}
            background="dark-1"
            width="30rem"
            height="30rem"
            align="center"
          >
            <div style={innerStyle}>
              <Button
                id="closeBtn"
                onClick={() => {
                  this.toggleModal();
                }}
              >
                <Close color="black" />
              </Button>
              <h2 id="bigText">Bummer Dude!</h2>

              <ErrorAnimation />

              <h2 style={smallTextStyle}>You need to be logged in to order!</h2>
            </div>
          </Box>
        </>
      );
    }
    return undefined;
  }

  render() {
    return <>{this.modal}</>;
  }
}

var innerStyle = {
  marginTop: "1rem",
  borderRadius: "10%",

  boxShadow: "10px 20px 30px rgba(0,0,0,0.7)",
};

var smallTextStyle = {
  zIndex: "2",
  position: "relative",
  color: "black",
  background: "rgba(234, 182, 145, 0.9)",
  padding: "1rem",
  margin: "1rem 0 0 0",
  borderRadius: "0 0 15% 15%",
};

export default LoginPrompt;
