import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const axios = require("axios");

function getReasons(that) {
  axios.get("reasons.json").then(function(response) {
    console.log(response);
    let issues = [];
    for (var i = 0; i < response.data.catagories.length; i++) {
      let catagory = response.data.catagories[i];
      issues.push(<h4 key={i}>{catagory.name}</h4>);
      for (var v = 0; v < catagory.issues.length; v++) {
        let issue = catagory.issues[v];
        issues.push(
          <Button id="issue-button" key={i + "-" + v}>
            {issue.text}
          </Button>
        );
      }
      console.log();
    }
    that.setState({
      uiIssues: issues
    });
  });
}

class Help extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uiIssues: []
    };
  }

  submit = e => {
    axios
      .post("http://localhost:5000/api/v1/message", {
        // emailAddress: "ahorseroar@gmail.com",
        // htmlMessage: "<h1>I am sending this from stia...kinda...sorta</h1>",
        // subject: "so this is awkward",
        // textMessage: "Sup"
        emailAddres: "sendeeEmail"
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  componentDidMount() {
    getReasons(this);
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
        <Container>
          <h1 id="help-title">Help Me, Help You, Help Someone</h1>
          <br />
          <Form>
            <Form.Group controlId="sendeeEmail">
              <h2 id="theirEmail">Their Email Address</h2>
              <Form.Control type="email" placeholder="tomcruise@gmail.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <h2 id="templateReasons">Reasons</h2>
              <br />
              <Row>
                <Col id="issue-col">{this.state.uiIssues}</Col>
              </Row>
            </Form.Group>
          </Form>
          <Button
            id="helpSubmit"
            className="btn-custom"
            variant="primary"
            onClick={this.submit}
          >
            Submit
          </Button>
        </Container>
      </>
    );
  }
}
export default Help;
