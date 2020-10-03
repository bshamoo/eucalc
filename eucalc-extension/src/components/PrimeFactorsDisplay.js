import React, { useState } from "react";
// Import Bootstrap Layout
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

var numbers = require("numbers");

const PrimeFactorsDisplay = () => {
  const [value, setValue] = useState("");
  const [prime, setPrime] = useState("");

  function isValidInt(n) {
    if (Number.isInteger(parseFloat(+n)) & (parseFloat(+n) > 0)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Container fluid className="my-3">
      <Row className="justify-content-center align-items-center my-3">
        <Col className="text-center">
          <input
            type="text"
            id="top-prime"
            value={value}
            placeholder='Enter a positive integer value: ex ("78")'
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
              isValidInt(value)
                ? setPrime(numbers.prime.factorization(value).join(" × "))
                : setPrime("ValueError: Please enter a positive integer value")
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
