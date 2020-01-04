import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
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
          <h3 id="directions">
            Do we not have the issue that you would like to address? If so,
            start thinking about some issues you would like us to add! Soon,
            there will be a form for you to fill out! We can't come up with all
            the reasons by ourselves!
          </h3>
          {/* <Container>
            <Form className="submitReason">
              <Form.Group controlId="issue">
                <Form.Label className="reasonBox">
                  Issue (e.g. pet hair on clothes, PDA,{" "}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  value={this.state.issue}
                  onChange={this.handleIssueInputChange}
                />
              </Form.Group>
              <Form.Group controlId="category">
                <Form.Label className="reasonBox">Category</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  value={this.state.category}
                  onChange={this.handleCategoryInputChange}
                />
              </Form.Group>
            </Form>
            <Button className="btn btn-custom" onClick={this.handleFormSubmit}>
              Submit
            </Button>
          </Container> */}
        </Container>
      </>
    );
  }
}
export default Request;
