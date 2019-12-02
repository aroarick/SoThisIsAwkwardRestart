import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const axios = require("axios");

function getReasons(that) {
  axios.get("reasons.json").then(function(response) {
    let issues = [];
    for (var i = 0; i < response.data.catagories.length; i++) {
      let category = response.data.catagories[i];
      issues.push(<h4 key={i}>{category.name}</h4>);
      for (var v = 0; v < category.issues.length; v++) {
        let issue = category.issues[v];
        issues.push(
          <Button
            id="issue-button"
            key={i + "-" + v}
            className={(() => {
              if (issue.text === that.state.selectedIssue) {
                return "selected";
              }
            })()}
            onClick={() => {
              that.setState({ selectedIssue: issue.text });
              getReasons(that);
            }}
          >
            {issue.text}
          </Button>
        );
      }
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
      uiIssues: [],
      selectedIssue: null,
      selectedTone: null
    };
  }
  submit = e => {
    console.log("submit");

    // axios
    //   .post("http://localhost:5000/api/v1/message", {
    //     // emailAddress: "ahorseroar@gmail.com",
    //     // htmlMessage: "<h1>I am sending this from stia...kinda...sorta</h1>",
    //     // subject: "so this is awkward",
    //     // textMessage: "Sup"
    //     emailAddres: "sendeeEmail"
    //   })
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  };

  setTone(w) {
    console.log(w);
  }

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
            <Form.Group>
              <h2 id="theirEmail">Their Email Address</h2>
              <Form.Control type="email" placeholder="tomcruise@gmail.com" />
            </Form.Group>
            <Form.Group>
              <h2 id="theirEmail">Tone</h2>
              <ButtonToolbar>
                <ToggleButtonGroup
                  type="radio"
                  name="options"
                  defaultValue={this.state.selectedTone}
                >
                  <ToggleButton
                    value={"blunt"}
                    onClick={() => this.setState({ selectedTone: "blunt" })}
                  >
                    Blunt
                  </ToggleButton>
                  <ToggleButton
                    value={"apologetic"}
                    onClick={() =>
                      this.setState({ selectedTone: "apologetic" })
                    }
                  >
                    Apologetic
                  </ToggleButton>
                </ToggleButtonGroup>
              </ButtonToolbar>
            </Form.Group>
            <Form.Group>
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
