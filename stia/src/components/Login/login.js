import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import API from "../utils/API";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.login({
      email: this.state.email,
      password: this.state.password
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <>
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
            <Nav.Link href="/login">Login or SignUp</Nav.Link>
          </Nav>
        </Navbar>
        <br />
        <Container>
          <h1 id="login-title">Login</h1>
          <br />
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                type="input"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted" id="texted-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button
              className="btn btn-custom loginSubmit"
              href="/help"
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
          <br />
          <h5 id="account-promo">Don't have an account?</h5>
          <Button
            className="btn btn-custom signUpPls"
            href="/signUp"
            variant="primary"
            type="submit"
          >
            Sign Up
          </Button>
        </Container>
      </>
    );
  }
}
export default Login;
<<<<<<< HEAD
=======

// {
//   /* onClick={this.handleFormSubmit} THIS GOES IN SUBMIT BUTTON*/
// }
>>>>>>> bc183338da521e45d0a740a3651d4728758f881c
