import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./eucalc16.png";

const Header = () => (
  <Container fluid className="my-3">
    <Row>
      <Col>
        <h6 id="title">
          <img src={logo} alt="eucalc_icon16" className="icon" /> EUCALC{" "}
          <span id="version">(1.0.0)</span>
        </h6>
      </Col>
    </Row>
  </Container>
);

export default Header;
