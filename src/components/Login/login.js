import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Alert from "react-bootstrap/Alert";
import { Redirect } from "react-router-dom";

const axios = require("axios");

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      allGood: false,
      message: null
    };
  }
  handleUsernameInputChange = e => {
    this.setState({ username: e.target.value });
  };

  handlePasswordInputChange = e => {
    this.setState({ password: e.target.value });
  };

  handleFormSubmit = event => {
    if (this.state.password && this.state.username) {
      let login = {};
      login.username = this.state.username;
      login.password = this.state.password;

      var self = this;
      axios.defaults.withCredentials = true;
      axios
        .post(
          "http://localhost:3001/api/v1/loginCheck",
          JSON.stringify(login),
          {
            headers: { "Content-Type": "application/json" }
          }
        )
        .then(function(response) {
          console.log(response);
          if (response.data.result === null) {
            self.setState({ message: "Try Again, bad password or username" });
          } else {
            self.setState({ allGood: true });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  renderRedirect = () => {
    if (this.state.allGood) {
      return <Redirect to="/requestForm" />;
    }
  };

  renderMessage = () => {
    if (this.state.message != null) {
      return <Alert variant="danger">{this.state.message}</Alert>;
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
          <h1 id="login-title">Login</h1>
          <br />
          {this.renderMessage()}
          <Form>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                value={this.state.username}
                onChange={this.handleUsernameInputChange}
                type="input"
                placeholder="Username"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={this.state.password}
                onChange={this.handlePasswordInputChange}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button
              className="btn btn-custom loginSubmit"
              onClick={this.handleFormSubmit}
              variant="primary"
            >
              Submit
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}
export default Login;
