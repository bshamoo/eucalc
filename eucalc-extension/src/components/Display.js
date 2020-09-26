import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Display = () => (
  <Container fluid className="my-3">
    <Row className="justify-content-center align-items-center">
      <Col>
        <input type="text" id="display" name="display" placeholder="0" />
      </Col>
    </Row>
  </Container>
);

export default Display;
