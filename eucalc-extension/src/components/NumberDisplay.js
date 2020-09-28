import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NumberDisplay = (props) => (
  <Container fluid className="my-3">
    <Row className="justify-content-center align-items-center">
      <Col className="text-right" id="display">
        {props.value}
      </Col>
    </Row>
  </Container>
);

export default NumberDisplay;
