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
        <h1 id="testimonials-title">Testimonials</h1>
        <Container>
          <h2 id="exampleName">So and so said:</h2>
          <h4 id="exampleText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ad
            recusandae tempora adipisci tempore! Eaque quod nam magni, at earum
            vel soluta incidunt maxime eligendi dolor, ratione animi repellat!
          </h4>
          <h2 id="exampleName">Thing 1 said:</h2>
          <h4 id="exampleText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ad
            recusandae tempora adipisci tempore! Eaque quod nam magni, at earum
            vel soluta incidunt maxime eligendi dolor, ratione animi repellat!
          </h4>
        </Container>
        <Container>
          <br />
          <br />
          <Form>
            <h4 id="testimonial-submit">Submit Your Own</h4>
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
