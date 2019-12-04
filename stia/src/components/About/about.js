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

        <Container>
          <br />
          <h1 id="about-FAQ">FAQ</h1>
          <h3 className="qa-question">What is the point of this?</h3>
          <p className="qa-answer">
            The point of this website is to relieve people of having awkward and
            maybe offensive conversations. Instead of you having to feel guilty
            or having to put up with the issues that people throw in your
            direction, So This Is Awkward does all the hard work for you.
          </p>
          <h3 className="qa-question">
            Could people use this to bully someone?
          </h3>
          <p className="qa-answer">
            That is not the point of the website. So This Is Awkward has
            pre-made options that you can choose from. There is no way to send
            customized messages that could be used to hurt someone. This website
            wants to bring attention to issues that some people have without
            being a jerk about it.
          </p>
          <h3 className="qa-question">Why can't I send my own message?</h3>
          <p className="qa-answer">
            So This Is Awkward does not want to play a part in bullying or
            possible abuse. We have a myriad of pre-made buttons and options to
            choose from. If your issue is not there, then it is too personal to
            deal with over email.
          </p>
          <h3 className="qa-question">
            How does the person I send it to get it?
          </h3>
          <p className="qa-answer">
            So This Is Awkward emails the person you would like to send it to.
          </p>
          <h3 className="qa-question">
            What if I don't want to recieve the emails?
          </h3>
          <p className="qa-answer">
            If you so happen to get an unfortunate email, there is an option to
            opt-out if you no longer want to know what is wrong with you.
          </p>
          <h3 className="qa-question">What if my issue isn't on here?</h3>
          <p className="qa-answer">
            Then it is probably too personal to handle over email.
          </p>
        </Container>
      </>
    );
  }
}
export default Testimonials;
