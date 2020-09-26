import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NumberPad = () => (
  <Container fluid className="mb-3">
    <Row className="justify-content-center align-items-center mb-1" id="first">
      <Col className="text-center">
        <button type="button" className="btn btn-yellow btn-block" id="clear">
          AC
        </button>
      </Col>
      <Col className="text-center">
        <button type="button" className="btn btn-red btn-block" id="clear">
          (
        </button>
      </Col>
      <Col className="text-center">
        <button type="button" className="btn btn-red btn-block" id="clear">
          )
        </button>
      </Col>
      <Col className="text-center">
        <button type="button" className="btn btn-red btn-block" id="clear">
          !
        </button>
      </Col>
      <Col className="text-center">
        <button type="button" className="btn btn-gray btn-block" id="clear">
          ÷
        </button>
      </Col>
    </Row>
  </Container>
);

export default NumberPad;
