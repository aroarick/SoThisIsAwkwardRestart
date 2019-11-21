import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import API from "../utils/API";

class SignUp extends React.Component {
  state = {
    name: "",
    email: "",
    userPassword: "",
    userPassword2: ""
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
      this.state.userPassword &&
      this.state.userPassword2 &&
      this.state.name &&
      this.state.email
    ) {
      if (this.state.userPassword === this.state.userPassword2) {
        API.signUp({
          name: this.state.name,
          email: this.state.email,
          userPassword: this.state.userPassword
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
            <Nav.Link href="/login">Login or SignUp</Nav.Link>
          </Nav>
        </Navbar>
        <br />
        <Container>
          <h1>Sign Up</h1>
          <br />
          <Form>
            <Form.Group controlId="userName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={this.state.userName}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group controlId="userEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={this.state.userEmail}
                onChange={this.handleInputChange}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="userPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={this.state.userPassword}
                onChange={this.handleInputChange}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group controlId="userPassword2">
              <Form.Label>Re-enter YourPassword</Form.Label>
              <Form.Control
                value={this.state.userPassword2}
                onChange={this.handleInputChange}
                type="password"
                placeholder="Password"
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
        </Container>
      </>
    );
  }
}
export default SignUp;
