import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Redirect } from "react-router-dom";

const axios = require("axios");

class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: "",
      category: "",
      allGood: false
    };
  }

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

    let self = this;
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
        self.setState({ allGood: true });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  renderRedirect = () => {
    if (this.state.allGood) {
      return <Redirect to="/requestReason" />;
    }
  };

  render() {
    return (
      <>
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
