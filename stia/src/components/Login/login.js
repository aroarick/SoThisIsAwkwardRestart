import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import API from "../utils/API";

class Login extends React.Component {
  state = {
    userEmail: "",
    userPassword: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.login({
      userEmail: this.state.userEmail,
      userPassword: this.state.userPassword
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>So This Is Awkward</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/help">Help Me, Help You, Help Someone</Nav.Link>
            <Nav.Link href="/login">Login or SignUp</Nav.Link>
          </Nav>
        </Navbar>
        <br />
        <Container>
          <h1>Login</h1>
          <br />
          <Form>
            <Form.Group controlId="userEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={this.state.userEmail}
                onChange={this.handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="userPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Button
              onClick={this.handleFormSubmit}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>

          <h5>Don't have an account?</h5>
          <Button href="/signUp" variant="primary" type="submit">
            Sign Up
          </Button>
        </Container>
      </>
    );
  }
}
export default Login;
