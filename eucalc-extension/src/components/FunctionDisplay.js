import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FunctionDisplay = () => (
  <Container fluid className="my-3">
    ///// /////GCD
    <Row className="justify-content-center align-items-center">
      <Col>
        <input
          type="text"
          id="bottom-input-GCD"
          name="bottom-x"
          placeholder="x"
        />
      </Col>
      <Col>
        <h6 class="input-text">mod</h6>
      </Col>
      <Col>
        <input
          type="text"
          id="bottom-input-GCD"
          name="bottom-y"
          placeholder="y"
        />
      </Col>
    </Row>
    <Row className="justify-content-center align-items-center">
      <h6 class="input-text">=</h6>
    </Row>
    <Row className="justify-content-center align-items-center">
      <Col>
        <input
          type="text"
          id="bottom-ans"
          name="bottom-ans"
          placeholder="0"
          disabled
        />
      </Col>
    </Row>
    <Row className="justify-content-center align-items-center">
      <Col>
        <button type="button" class="btn btn-gray">
          Clear
        </button>
      </Col>
    </Row>
    ///// /////FME
    <Row className="justify-content-center align-items-center">
      <Col>
        <input
          type="text"
          id="bottom-input-FME"
          name="bottom-x"
          placeholder="x"
        />
      </Col>
      <Col>
        <h6 class="input-text">^</h6>
      </Col>
      <Col>
        <input
          type="text"
          id="bottom-input-FME"
          name="bottom-e"
          placeholder="e"
        />
      </Col>
      <Col>
        <h6 class="input-text">mod</h6>
      </Col>
      <Col>
        <input
          type="text"
          id="bottom-input-FME"
          name="bottom-y"
          placeholder="y"
        />
      </Col>
    </Row>
    ///// ///// BIN
    <Row className="justify-content-center align-items-center">
      <input type="text" id="bottom-ans" name="bottom-ans" placeholder="0" />
      <sub> 10</sub>
    </Row>
    <Row className="justify-content-center align-items-center">
      <input type="text" id="bottom-ans" name="bottom-ans" placeholder="0" />
      <sub> 2</sub>
    </Row>
    ///// ///// HEX
    <Row className="justify-content-center align-items-center">
      <input type="text" id="bottom-ans" name="bottom-ans" placeholder="0" />
      <sub> 10</sub>
    </Row>
    <Row className="justify-content-center align-items-center">
      <input type="text" id="bottom-ans" name="bottom-ans" placeholder="0" />
      <sub> 16</sub>
    </Row>
    ///// ///// Answer
    <Row className="justify-content-center align-items-center">
      <h6 class="input-text">=</h6>
    </Row>
    <Row className="justify-content-center align-items-center">
      <Col>
        <input
          type="text"
          id="bottom-ans"
          name="bottom-ans"
          placeholder="0"
          disabled
        />
      </Col>
    </Row>
    <Row className="justify-content-center align-items-center">
      <Col>
        <button type="button" class="btn btn-gray">
          Clear
        </button>
      </Col>
    </Row>
  </Container>
);

export default FunctionDisplay;
