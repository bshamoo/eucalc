import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Bin2IntDisplay = () => (
  <Container fluid className="my-3">
    <Row className="justify-content-center align-items-center my-3">
      <Col className="text-center">
        <input type="text" id="top-b2i" name="top-b2i" placeholder="0" />
        <sub> 2</sub>
      </Col>
    </Row>
    <Row className="justify-content-center align-items-center my-3">
      <Col className="text-center">
        <button type="button" className="btn" id="btn-blue">
          =
        </button>
      </Col>
    </Row>
    <Row className="justify-content-center align-items-center my-3">
      <Col className="text-center">
        <input type="text" id="bottom-b2i" name="bottom-b2i" placeholder="0" />
        <sub> 10</sub>
      </Col>
    </Row>
    <Row className="justify-content-center align-items-center my-3">
      <Col className="text-center">
        <button type="button" className="btn" id="btn-gray">
          Reset
        </button>
      </Col>
    </Row>
  </Container>
);

export default Bin2IntDisplay;
