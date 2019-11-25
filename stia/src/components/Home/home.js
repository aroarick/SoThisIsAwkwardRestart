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
        <Col md={5} className="column-1">
          <Row className="row-1">
            <Col id="title" md={12}>
              <Image id="logo-image" src="images/logo-dark-cropped.PNG" />
              {/* <img src={logo.svg} style={nbStyle.logo} alt="fireSpot" /> */}
            </Col>
          </Row>
          <Row className="row-2">
            <Col md={12} className="color-block-1"></Col>
          </Row>
        </Col>
        <Col md={4} className="column-2">
          <Row className="row-3">
            <Col md={12} className="color-block-2"></Col>
          </Row>
          <Row className="row-4">
            <Col md={12}>
              <Button className="btn btn-home-custom help" href="/help">
                Help Me, Help You, Help Someone
              </Button>
            </Col>
          </Row>
        </Col>
        <Col md={3} className="column-3">
          <Row className="row-5">
            <Col md={12}>
              <Button className="btn btn-home-custom login" href="/login">
                Login Or Sign Up
              </Button>
            </Col>
          </Row>
          <Row className="row-6">
            <Col md={12} className="color-block-3"></Col>
          </Row>
          <Row className="row-7">
            <Col md={12}>
              <Button
                className="btn btn-home-custom testimonials"
                href="/testimonials"
              >
                Testimonials
              </Button>
            </Col>
          </Row>
          <Row className="row-8">
            <Col md={12} className="color-block-4"></Col>
          </Row>
          <Row className="row-9">
            <Col md={12}>
              <Button className="btn btn-home-custom about" href="/about">
                About
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
export default Home;
