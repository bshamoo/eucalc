import React, { useState } from "react";
// Import Bootstrap Layout
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const GCDDisplay = () => {
  const [leftValue, setLeftValue] = useState("");
  const [rightValue, setRightValue] = useState("");
  const [gcd, setGCD] = useState("");

  function isValidInt(x, y) {
    if (Number.isInteger(parseFloat(+x)) & Number.isInteger(parseFloat(+y))) {
      return true;
    } else {
      return false;
    }
  }

  function euclidean(x, y) {
    while (x !== y) {
      if (x >= y) {
        x -= y;
      } else {
        y -= x;
      }
    }
    return x;
  }

  return (
    <Container fluid className="my-3">
      <Row className="justify-content-center align-items-center my-3">
        <Col className="text-center">
          <input
            type="text"
            id="top-x-GCD"
            value={leftValue}
            placeholder="x"
            onChange={(x) => setLeftValue(x.currentTarget.value)}
          />
        </Col>
        <Col className="text-center">
          <h6 id="input-text">mod</h6>
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
      </Row>
      <Row className="justify-content-center align-items-center my-3">
        <Col className="text-center">
          <button
            type="button"
            className="btn"
            id="btn-blue"
            onClick={() =>
              isValidInt(leftValue, rightValue)
                ? setGCD(
                    euclidean(
                      parseInt(leftValue),
                      parseInt(rightValue)
                    ).toString()
                  )
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
