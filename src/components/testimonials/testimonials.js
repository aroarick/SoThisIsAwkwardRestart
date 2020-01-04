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
            <Nav.Link href="/requestReason">Request A Reason</Nav.Link>
          </Nav>
        </Navbar>

        <br />
        <h1 id="testimonials-title">Testimonials</h1>
        <Container>
          <h3 className="qa-question">Jennifer</h3>
          <p className="qa-answer">
            "So This Is Awkward" saved my marriage! My husband has bad breath
            and it was interfering with our relationship. By sending an
            anonymous message, I was able to communicate this sensitive problem.
            Everything is better now!
          </p>
          <h3 className="qa-question">Sandy</h3>
          <p className="qa-answer">
            OH LAWD! you saved me, my sons feet were straight up murderin' my
            nose holes. Now he thinks persons besides me think he stank. Maybe
            now he will start washin' every day.
          </p>
          <h3 className="qa-question">Anonymous</h3>
          <p className="qa-answer">
            One of my co-workers tends to smoke during work. I usually don't
            mind, but lately, the smell has been giving me a headache:
            distratcing me from my duties. I was able to send an email from "So
            This Is Awkward" to them and now they are more concienious of the
            smell. Thank you!
          </p>

          {/* <Form className="submitTestimonial">
            <h3 id="submit-testimonial-header">
              Submit your experience with So This Is Awkward Here
            </h3>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
              <Form.Text className="text-muted">
                You don't have to use your real name.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Testimonial</Form.Label>
              <Form.Control rows="3" as="textArea" />
            </Form.Group>
            <Button
              type="submit"
              className="btn btn-custom"
              onClick={this.handleFormSubmit}
            >
              Submit
            </Button>
          </Form> */}
        </Container>
      </>
    );
  }
}
export default Testimonials;
