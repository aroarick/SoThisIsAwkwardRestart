import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Help extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>So This Is Awkward</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/help">Help Me, Help You, Help Someone</Nav.Link>
            <Nav.Link href="/login">Login or SignUp</Nav.Link>
          </Nav>
        </Navbar>
        <br />
        <Container>
          <h1>Help Me, Help You, Help Someone</h1>
          <br />
          <Form>
            <Form.Group controlId="userEmail">
              <Form.Label>Your Email Address</Form.Label>
              <Form.Control type="email" placeholder="valkilmer@gmail.com" />
            </Form.Group>
            <Form.Group controlId="sendeeEmail">
              <Form.Label>Their Email Address</Form.Label>
              <Form.Control type="email" placeholder="tomcruise@gmail.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Template Reasons</Form.Label>
              <Form.Control as="select" multiple>
                <option>Wuv, Twu Wuv</option>
                <option>Stinky Feet</option>
                <option>Bad Breath</option>
                <option>Too Much PDA</option>
                <option>Smell Like Smoke</option>
                <option>Stinks in general</option>
                <option>Bad Work Ethic</option>
                <option>You are a rascal</option>
                <option>I just don't like you</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Or Write Your Own Reason</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Form>
          <Button variant="primary">Primary</Button>
        </Container>
      </>
    );
  }
}
export default Help;
