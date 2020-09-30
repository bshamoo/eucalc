import React, { useState } from "react";
// Import Bootstrap Layout
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Int2BinDisplay = () => {
  const [int, setInt] = useState("");
  const [bin, setBin] = useState("");

  return (
    <Container fluid className="my-3">
      <Row className="justify-content-center align-items-center my-3">
        <Col className="text-center">
          <input
            type="text"
            id="top-i2b"
            value={int}
            placeholder={"0"}
            onChange={(i) => setInt(i.currentTarget.value)}
          />
          <sub> 10</sub>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center my-3">
        <Col className="text-center">
          <button
            type="button"
            className="btn"
            id="btn-blue"
            onClick={() =>
              Number.isInteger(parseFloat(+int))
                ? setBin((parseInt(int) >>> 0).toString(2))
                : setBin("ValueError: Please enter an integer value")
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
            id="bottom-i2b"
            value={bin}
            placeholder={"0"}
            disabled
          />
          <sub> 2</sub>
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
export default Int2BinDisplay;
