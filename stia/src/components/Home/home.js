import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row>
        <Col md={6}>
          <Image id="logo-image" src="images/logo-dark-cropped.PNG" fluid />
        </Col>
        <Col md={6}>
          <Button className="btn btn-home-custom help" href="/help">
            Help Me Help You
          </Button>
          <Button className="btn btn-home-custom login" href="/login">
            Login Or Sign Up
          </Button>
          <Button
            className="btn btn-home-custom testimonials"
            href="/testimonials"
          >
            Testimonials
          </Button>
          <Button className="btn btn-home-custom about" href="/about">
            FAQ
          </Button>
        </Col>
      </Row>
    );
  }
}
export default Home;
