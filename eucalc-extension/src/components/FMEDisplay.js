import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FMEDisplay = () => (
  <Container fluid className="my-3">
    <Row className="justify-content-center align-items-center my-3">
      <Col className="text-center">
        <input type="text" id="top-x-FME" name="bottom-x" placeholder="x" />
      </Col>
      <Col className="text-center">
        <h6 id="input-text">^</h6>
      </Col>
      <Col className="text-center">
        <input type="text" id="top-e-FME" name="bottom-e" placeholder="e" />
      </Col>
      <Col className="text-center">
        <h6 id="input-text">mod</h6>
      </Col>
      <Col className="text-center">
        <input type="text" id="top-y-FME" name="bottom-y" placeholder="y" />
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
        <input type="text" id="bottom-FME" name="bottom-FME" placeholder="0" />
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

export default FMEDisplay;
