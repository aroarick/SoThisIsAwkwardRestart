import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
            <Nav.Link href="/requestReason">Request A Reason</Nav.Link>
          </Nav>
        </Navbar>

        <br />
        <h1 id="testimonials-title">Request A Reason</h1>
        <Container>
          <h2 id="directions">
            Would you like to assist in making the reasons for why people send
            an anonymous email? We can't come up with all the reasons by our
            selves!
          </h2>
          <h3 id="promo">
            If you are interested in becoming a part of our process, sign up
            here
          </h3>
          <Button className="btn btn-custom" href="/signUp">
            Sign Up
          </Button>
        </Container>
      </>
    );
  }
}
export default Request;
