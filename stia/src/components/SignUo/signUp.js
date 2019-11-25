import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import API from "../utils/API";

class SignUp extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.password &&
      this.state.password2 &&
      this.state.username &&
      this.state.email
    ) {
      if (this.state.password === this.state.password2) {
        API.signUp({
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
        })
          .then(res => console.log(res))
          .catch(err => console.log(err));
      }
    }
  };

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>So This Is Awkward</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/help">Help Me, Help You, Help Someone</Nav.Link>
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/login">Login or SignUp</Nav.Link>
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
                onChange={this.handleInputChange}
                name="username"
                type="input"
                placeholder="Enter Username"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                type="input"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
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
            <Form.Group controlId="formBasicPassword2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                value={this.state.password2}
                onChange={this.handleInputChange}
                name="password2"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button
              className="btn btn-custom submitSignUp"
              onClick={this.handleFormSubmit}
              variant="primary"
              type="submit"
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
