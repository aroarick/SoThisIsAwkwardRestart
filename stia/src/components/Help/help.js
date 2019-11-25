import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Help extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submit = e => {
    console.log(e);
  };
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>So This Is Awkward</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/help">Help Me, Help You, Help Someone</Nav.Link>
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/login">Login or SignUp</Nav.Link>
          </Nav>
        </Navbar>
        <br />
        <Container>
          <h1 id="help-title">Help Me, Help You, Help Someone</h1>
          <br />
          <Form>
            <Form.Group controlId="sendeeEmail">
              <Form.Label id="theirEmail">Their Email Address</Form.Label>
              <Form.Control type="email" placeholder="tomcruise@gmail.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label id="templateReasons">Reasons</Form.Label>
              <br />
              <Row>
                <Col id="apperance">
                  <Form.Label id="apperance-col">Apperance</Form.Label>
                  <Form.Control as="select" multiple>
                    <option>You're pretty</option>
                    <option>You're handsome</option>
                    <option>You're unsettling to my eyes</option>
                    <option>Your hair looks awesome</option>
                    <option>Your hair is a wreck</option>
                    <option>Your makeup is amazing</option>
                    <option>Your makeup could use some work</option>
                  </Form.Control>
                </Col>
                <Col id="hygiene">
                  <Form.Label id="hygiene-col">Hygiene</Form.Label>
                  <Form.Control as="select" multiple>
                    <option>Your breath stinks</option>
                    <option>Your feet stink</option>
                    <option>You stink</option>
                    <option>You should maybe shower more</option>
                  </Form.Control>
                </Col>
                <Col id="work-and-school">
                  <Form.Label id="work-and-school-col">
                    Work and School
                  </Form.Label>
                  <Form.Control as="select" multiple>
                    <option>You have bad work ethic</option>
                    <option>You are not doing enough</option>
                    <option>You suck</option>
                    <option>You are doing an amazing job</option>
                  </Form.Control>
                </Col>
                <Col id="personal">
                  <Form.Label id="personal-col">Personal</Form.Label>
                  <Form.Control as="select" multiple>
                    <option>I don't like your friends</option>
                    <option>I don't like your family</option>
                    <option>I just don't like you</option>
                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>
          </Form>
          <Button
            className="btn btn-custom helpSubmit"
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
