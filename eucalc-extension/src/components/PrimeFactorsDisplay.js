import React, { useState } from "react";
// Import Bootstrap Layout
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import Numbers.js
var numbers = require("numbers");

// Checks for valid integer
function isInt(x) {
  const intRegExp = /^[0-9]+$/;

  if (intRegExp.test(x)) {
    return true;
  } else {
    return false;
  }
}

const PrimeFactorsDisplay = () => {
  // Input Integer Value
  const [value, setValue] = useState("");
  // Output Prime Factorization
  const [prime, setPrime] = useState("");

  return (
    <Container fluid className="my-3">
      <Row className="justify-content-center align-items-center my-3">
        <Col className="text-center">
          <input
            type="text"
            id="top-prime"
            value={value}
            placeholder="0"
            onChange={(v) => setValue(v.currentTarget.value)}
          />
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center my-3">
        <Col className="text-center">
          <button
            type="button"
            className="btn"
            id="btn-blue"
            onClick={() =>
              isInt(value)
                ? setPrime(numbers.prime.factorization(value).join(" × "))
                : setPrime('ValueError: Enter a positive integer value: "78"')
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
            id="bottom-FME"
            value={prime}
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
            onClick={() => setValue("") & setPrime("")}
          >
            Reset
          </button>
        </Col>
      </Row>
    </Container>
  );
};
export default PrimeFactorsDisplay;
