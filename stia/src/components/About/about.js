import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
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
          <Navbar.Brand href="#home">So This Is Awkward</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/help">Help Me, Help You, Help Someone</Nav.Link>
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/login">Login or SignUp</Nav.Link>
          </Nav>
        </Navbar>

        <Container>
          <h1 id="about-title">About</h1>
          <h3 id="about-paragraph">
            So This Is Awkward is a website that anonymousely sends and email to
            a person of the users choice. This email can consist of anything the
            user wants (please be respectful). However, the purpose of this
            website is to make people aware of their flaws (ie: body odour, bad
            breath, just plain annoying, etc).
          </h3>
          <h1 id="about-FAQ">FAQ</h1>
        </Container>
      </>
    );
  }
}
export default Testimonials;
