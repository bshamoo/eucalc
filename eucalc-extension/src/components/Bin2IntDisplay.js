import React, { useState } from "react";
// Import Bootstrap Layout
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function isBin(val) {
  const binRegExp = /^[0-1]+$/;

  if (binRegExp.test(val)) {
    return true;
  } else {
    return false;
  }
}

const Bin2IntDisplay = () => {
  // Input Binary Value
  const [bin, setBin] = useState("");
  // Output Integer Value
  const [int, setInt] = useState("");
  return (
    <Container fluid className="my-3">
      <Row className="justify-content-center align-items-center my-3">
        <Col className="text-center">
          <input
            type="text"
            id="top-b2i"
            value={bin}
            placeholder="0"
            onChange={(b) => setBin(b.currentTarget.value)}
          />
          <sub> 2</sub>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center my-3">
        <Col className="text-center">
          <button
            type="button"
            className="btn"
            id="btn-blue"
            onClick={() =>
              isBin(bin)
                ? setInt(parseInt(bin, 2).toString())
                : setInt('ValueError: Enter a binary value: ex ("1001110")')
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
            id="bottom-b2i"
            value={int}
            placeholder="0"
            disabled
          />
          <sub> 10</sub>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center my-3">
        <Col className="text-center">
          <button
            type="button"
            className="btn"
            id="btn-gray"
            onClick={() => setInt("") & setBin("")}
          >
            Reset
          </button>
        </Col>
      </Row>
    </Container>
  );
};
export default Bin2IntDisplay;
