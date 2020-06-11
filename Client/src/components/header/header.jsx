import React from "react";
import Context from "../context/context";
import { Link } from "react-router-dom";
import {
  Box,
  Header,
  Button,
  ResponsiveContext,
  Form,
  DropButton,
  Image,
  Text,
  FormField,
  TextInput,
} from "grommet";

import { Shop, Close } from "grommet-icons";

import Modal from "../modal/modal";
import "./Header.css";
import axios from "axios";
import flower from "./flower06.png";
import logo from "./logo.png";

import burger from "./burger3.png";

import Dashboard from "../dashboard/Dashboard";
import { Consumer as UserConsumer } from "../context/userContext";

class Header1 extends React.Component {
  //This will enable the use of context-functions and states
  static contextType = Context;

  state = {
    showModal: false,
    showLoginModal: false,
    username: "",
    email: "",
    password: "",
  };

  //To open modal call this function on a button
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  toggleLoginModal = () => {
    this.setState({
      showLoginModal: !this.state.showLoginModal,
    });
  };

  handelInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  resetInputFields = () => {
    this.setState({
      username: "",
      email: "",
      password: "",
    });
  };

  successfullyCreatedUser = () => {
    alert("You were successfully registered!");
  };

  submitRegister = (event) => {
    event.preventDefault();

    const inputValues = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    axios({
      url: "http://localhost:5000/register",
      method: "POST",
      data: inputValues,
    })
      .then(() => {
        this.resetInputFields();
        this.successfullyCreatedUser();
        this.toggleModal();
      })
      .catch(() => {
        alert("Username already taken, choose another one.");
      });
  };

  renderMenuItems = () => (
    <UserConsumer>
				{(userState) => (
    <Box 
    background="#7D4487"
    width="small"
    align="center"
    >
      {
        !userState.isLoggedIn?
        <Text className="dropdown"
        style={{ cursor: 'pointer'}}
        onClick={() => this.toggleLoginModal()}
        
        >Login</Text>:
      <Text className="dropdown"
      onClick={() => userState.onSignOut()}
      style={{ cursor: 'pointer'}}
      >Logout
      </Text>
      }{

        !userState.isLoggedIn?
        <Text className="dropdown"
          style={{ cursor: 'pointer'}}
          onClick={() => this.toggleModal()}
          label="Register"
        >Register</Text>:
        <></>
      }{
        userState.isAdmin?
        <Link to="/admin"
        className="link"
        color="red"
        style={{textDecoration: "none"}}>
        <Text className="dropdown"
      
        style={{ color: "white", border: "black" }}
        label="Admin"
      >Admin</Text>
      </Link>:
      <></>
      }
      <br/>
      <br/>
      <br/>
    </Box>
    )}
    </UserConsumer>
  );

  //Place modal-content in here
  get modal() {
    if (this.state.showModal) {
      return (
        <Modal>
          <Box className="modal">
            <Box className="modalCloseButton">
              <Button
                onClick={() => {
                  this.toggleModal();
                }}
              >
                <Close color="#EAB691" />
              </Button>
            </Box>
            <h1>Register</h1>
            <Form onSubmit={this.submitRegister}>
              <FormField label="Username">
                <TextInput
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handelInputChange}
                  required
                />
              </FormField>
              <FormField label="E-mail">
                <TextInput
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handelInputChange}
                  required
                />
              </FormField>
              <FormField label="Password">
                <TextInput
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handelInputChange}
                  required
                />
              </FormField>
              <Box style={{ alignSelf: "center" }}>
                <Button color="#4AAEAE" label="Register" type="submit"></Button>
              </Box>
            </Form>
          </Box>
        </Modal>
      );
    } else if (this.state.showLoginModal) {
      return (
        <Modal>
          <Box className="modal">
            <Box className="modalCloseButton">
              <Button
                onClick={() => {
                  this.toggleLoginModal();
                }}
              >
                <Close color="#EAB691" />
              </Button>
            </Box>
            <Dashboard />
          </Box>
        </Modal>
      );
    }
    return undefined;
  }

  render() {

    return (
      <>
        <ResponsiveContext.Consumer>
          {(responsive) =>
            responsive === "small" ? (
              <Header
                background="#EAB691"
                pad="xlarge"
                style={{
                  borderRadius: "0 0 60% 60% / 0 0 30% 30%",
                  padding: "35px",
                }}
              >
                <Box display="block" direction="row" alignContent="start">
                  <DropButton
                    alignSelf="center"
                    margin={{ vertical: "small" }}
                    dropContent={this.renderMenuItems()}
                    dropProps={{ align: { top: "bottom" } }}
                  >
                    <Image
                      src={burger}
                      alt="peace burger"
                      width="35px"
                      height="35px"
                    />
                  </DropButton>
                </Box>
                <Link to="/">
                  <Image
                    src={logo}
                    alt="love peace and records"
                    width="130px"
                  />
                </Link>
                <Box direction="row">
                  <Link to="/checkout/">
                    <Shop color="white" size="medium" />
                  </Link>
                  <Text
                    style={{
                      color: "#7D4487",
                      background: "orange",
                      width: "1.5rem",
                      height: "1.5rem",
                      borderRadius: "50%",
                    }}
                  >
                    {this.context.getTotalQuantity()}
                  </Text>
                </Box>
              </Header>
            ) : (
              <Header
                justify="between"
                background="#EAB691"
                pad="small"
                height="15rem"
                style={{ borderRadius: "0 0 60% 60% / 0 0 30% 30%" }}
              >
                <Box
                  display="block"
                  direction="row"
                  alignContent="start"
                  style={{ padding: "44px" }}
                >
                  <DropButton
                    alignSelf="center"
                    margin={{ vertical: "small" }}
                    dropContent={this.renderMenuItems()}
                    dropProps={{ align: { top: "bottom" } }}
                  >
                    <Image
                      src={burger}
                      alt="peace burger"
                      width="45px"
                      height="45px"
                    />
                  </DropButton>
                </Box>
                <Box>
                  <Link to="/">
                    <Image src={logo} alt="love peace and records" />
                  </Link>
                </Box>
                <Box direction="row">
                  <Link to="/checkout/">
                    <Shop color="white" size="medium" />
                  </Link>

                  <Text
                    style={{
                      color: "purple",
                      background: "orange",
                      width: "1.5rem",
                      height: "1.5rem",
                      borderRadius: "50%",
                    }}
                  >
                    {this.context.getTotalQuantity()}
                  </Text>
                </Box>
              </Header>
            )
          }
        </ResponsiveContext.Consumer>

        {this.modal}
      </>
    );
  }
}

export default Header1;
