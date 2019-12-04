import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
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
            <Nav.Link href="/requestReason">Request A Reason</Nav.Link>
          </Nav>
        </Navbar>

        <br />
        <h1 id="testimonials-title">Testimonials</h1>
        <Container>
          <h3 className="qa-question">Jennifer said:</h3>
          <p className="qa-answer">
            "So This Is Awkward" saved my marriage! My husband has bad breath
            and it was interfering with our relationship. By sending an
            anonymous message, I was able to communicate this sensitive problem.
            Everything is better now!
          </p>
          <h3 className="qa-question">Anonymous said:</h3>
          <p className="qa-answer">
            One of my co-workers tends to smoke during work. I usually don't
            mind, but lately, the smell has been giving me a headache:
            distratcing me from my duties. I was able to send an email from "So
            This Is Awkward" to them and now they are more concienious of the
            smell. Thank you!
          </p>
        </Container>
      </>
    );
  }
}
export default Testimonials;
