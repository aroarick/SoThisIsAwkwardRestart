import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">So This Is Awkward</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/help">Help Me, Help You, Help Someone</Nav.Link>
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/login">Login or SignUp</Nav.Link>
          </Nav>
        </Navbar>

        <br />
        <h1 id="testimonials-title">Testimonials</h1>
        <Container></Container>
        <Container>
          <Form>
            <Form.Group controlId="user-Name">
              <Form.Label>Your name</Form.Label>
              <Form.Control type="email" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Comment</Form.Label>
              <Form.Control type="text" placeholder="Comment" rows="3" />
            </Form.Group>
            <Button
              className="btn btn-custom submitTestimonial"
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
export default Testimonials;
