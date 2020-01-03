import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation() {
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
    </>
  );
}

export default Navigation;
