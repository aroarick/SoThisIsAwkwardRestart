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
    that.setState({ data: response.data });
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
      data: {},
      selectedIssue: null,
      selectedTone: null,
      emailAddress: ""
    };
  }
  submit = e => {
    // Find issue data
    let selectedIssue = this.state.selectedIssue;
    let selectedTone = this.state.selectedTone;
    let emailAddress = this.state.emailAddress;
    let data = this.state.data;
    let issueObject = null;

    for (var cat = 0; cat < data.catagories.length; cat++) {
      let category = data.catagories[cat];
      for (var iss = 0; iss < category.issues.length; iss++) {
        let issue = category.issues[iss];
        if (issue.text === selectedIssue) {
          issueObject = issue;
        }
      }
    }

    // build json for server
    let emailPackage = {};
    if (issueObject) {
      emailPackage.emailAddress = emailAddress;
      emailPackage.htmlMessage = issueObject.messageTone[selectedTone].html;
      emailPackage.textMessage = issueObject.messageTone[selectedTone].text;
      emailPackage.subject = issueObject.subject;

      axios
        .post(
          "http://localhost:3001/api/v1/message",
          JSON.stringify(emailPackage),
          {
            headers: { "Content-Type": "application/json" }
          }
        )
        .then(function(response) {})
        .catch(function(error) {
          console.log(error);
        });
    } else {
      alert("selected something you hoser");
    }

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

  handleEmailAddressChange = e => {
    this.setState({ emailAddress: e.target.value });
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
            <Nav.Link href="/login">Login or SignUp</Nav.Link>
          </Nav>
        </Navbar>
        <br />
        <Container>
          <h1 id="help-title">Help Me Help You</h1>
          <br />
          <Form>
            <Form.Group>
              <h2 id="theirEmail">Step 1: Their Email Address</h2>
              <h5 id="step1">
                Enter the email of the person you would like to send your
                concern to.
              </h5>
              <Form.Control
                type="email"
                placeholder="tomcruise@cruisin.com"
                value={this.state.emailAddress}
                onChange={this.handleEmailAddressChange}
              />
            </Form.Group>
            <Form.Group>
              <h2 id="theirEmail">Step 2: Tone</h2>
              <h5 id="step2">
                Pick how you would like to sound in the email. Blunt would be
                more direct and to the point, whereas apologetic would be
                easier.
              </h5>
              <Row id="toneButtons">
                <ButtonToolbar>
                  <ToggleButtonGroup
                    type="radio"
                    name="options"
                    defaultValue={this.state.selectedTone}
                  >
                    <ToggleButton
                      id="bluntButton"
                      value={"blunt"}
                      onClick={() => this.setState({ selectedTone: "blunt" })}
                    >
                      Blunt
                    </ToggleButton>
                    <ToggleButton
                      id="apologeticButton"
                      value={"apologetic"}
                      onClick={() =>
                        this.setState({ selectedTone: "apologetic" })
                      }
                    >
                      Apologetic
                    </ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>
              </Row>
            </Form.Group>
            <Form.Group>
              <h2 id="templateReasons">Step 3: Reasons</h2>
              <h5 id="step3">
                Choose the reason why you are sending the email
              </h5>
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
