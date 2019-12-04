import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const axios = require("axios");

class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  state = {
    issue: "",
    category: ""
  };

  handleIssueInputChange = e => {
    this.setState({ issue: e.target.value });
  };

  handleCategoryInputChange = e => {
    this.setState({ category: e.target.value });
  };

  handleFormSubmit = event => {
    let suggestion = {};
    suggestion.issue = this.state.issue;
    suggestion.category = this.state.category;

    axios.defaults.withCredentials = true;
    axios
      .post(
        "http://localhost:3001/api/v1/suggestion",
        JSON.stringify(suggestion),
        {
          headers: { "Content-Type": "application/json" }
        }
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
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
            <Nav.Link href="/requestReason">Request A Reason</Nav.Link>{" "}
          </Nav>
        </Navbar>

        <br />
        <h1 id="testimonials-title">Request A Reason</h1>
        <Container>
          <h2 id="directions">
            Fill out the box with a reason that you believe is important.
            Example: bad breath, loud music, on phone too much, etc
          </h2>
          <Form>
            <Form.Group controlId="issue">
              <Form.Label>Issue</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                value={this.state.issue}
                onChange={this.handleIssueInputChange}
              />
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
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
        </Container>
      </>
    );
  }
}
export default FormPage;
