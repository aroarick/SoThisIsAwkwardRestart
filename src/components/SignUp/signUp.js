import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Redirect } from "react-router-dom";

const axios = require("axios");

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password2: "",
      loggedIn: false
    };
  }

  handleUsernameInputChange = e => {
    this.setState({ username: e.target.value });
  };

  handlePasswordInputChange = e => {
    this.setState({ password: e.target.value });
  };

  handlePassword2InputChange = e => {
    this.setState({ password2: e.target.value });
  };

  handleFormSubmit = event => {
    if (this.state.password && this.state.password2 && this.state.username) {
      if (this.state.password === this.state.password2) {
        let newUser = {};
        newUser.username = this.state.username;
        newUser.password = this.state.password;

        axios.defaults.withCredentials = true;
        axios
          .post("http://localhost:3001/api/v1/login", JSON.stringify(newUser), {
            headers: { "Content-Type": "application/json" }
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
        this.setState({ loggedIn: true });
      }
    }
  };

  renderRedirect = () => {
    if (this.state.loggedIn) {
      return <Redirect to="/requestForm" />;
    }
  };

  render() {
    return (
      <>
        {this.renderRedirect()}
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <span id="blue">So</span> <span id="orange">This</span>{" "}
            <span id="green">Is</span> <span id="pink">Awkward</span>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/help">Help Me, Help You, Help Someone</Nav.Link>
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            <Nav.Link href="/about">FAQ</Nav.Link>
            <Nav.Link href="/requestReason">Request A Reason</Nav.Link>
          </Nav>
        </Navbar>
        <br />
        <Container>
          <h1 id="signUp-title">Sign Up</h1>
          <br />
          <Form>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                value={this.state.username}
                onChange={this.handleUsernameInputChange}
                name="username"
                type="input"
                placeholder="Enter Username"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={this.state.password}
                onChange={this.handlePasswordInputChange}
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                value={this.state.password2}
                onChange={this.handlePassword2InputChange}
                name="password2"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button
              className="btn btn-custom submitSignUp"
              onClick={this.handleFormSubmit}
              variant="primary"
            >
              Submit
            </Button>
          </Form>
          <br />
        </Container>
      </>
    );
  }
}
export default SignUp;
