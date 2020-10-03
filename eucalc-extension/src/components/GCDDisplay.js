import React, { useState } from "react";
// Import Bootstrap Layout
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import Numbers.js
var numbers = require("numbers");

// Checks for valid integer
function isInt(x, y) {
  const intRegExp = /^-?[0-9]+$/;

  if (intRegExp.test(x) & intRegExp.test(y)) {
    return true;
  } else {
    return false;
  }
}

const GCDDisplay = () => {
  // Input Left Integer Value
  const [leftValue, setLeftValue] = useState("");
  // Input Right Integer Value
  const [rightValue, setRightValue] = useState("");
  // Output Greates Common Denominator Value
  const [gcd, setGCD] = useState("");

  return (
    <Container fluid className="my-3">
      <Row className="justify-content-center align-items-center my-3">
        <Col xs={1} className="text-center">
          <h6 id="input-text">gcd( </h6>
        </Col>
        <Col className="text-center">
          <input
            type="text"
            id="top-x-GCD"
            value={leftValue}
            placeholder="x"
            onChange={(x) => setLeftValue(x.currentTarget.value)}
          />
        </Col>
        <Col xs={1} className="text-center">
          <h6 id="input-text">,</h6>
        </Col>
        <Col className="text-center">
          <input
            type="text"
            id="top-y-GCD"
            value={rightValue}
            placeholder="y"
            onChange={(y) => setRightValue(y.currentTarget.value)}
          />
        </Col>
        <Col xs={1} className="text-center">
          <h6 id="input-text">)</h6>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center my-3">
        <Col className="text-center">
          <button
            type="button"
            className="btn"
            id="btn-blue"
            onClick={() =>
              isInt(leftValue, rightValue)
                ? setGCD(numbers.basic.gcd(leftValue, rightValue))
                : setGCD("ValueError: Please enter two integer values")
            }
          >
            =
          </button>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center my-3">
        <Col className="text-center">
          <input
            type="text"
            id="bottom-GCD"
            value={gcd}
            placeholder="0"
            disabled
          />
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center my-3">
        <Col className="text-center">
          <button
            type="button"
            className="btn"
            id="btn-gray"
            onClick={() => setLeftValue("") & setRightValue("") & setGCD("")}
          >
            Reset
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default GCDDisplay;
