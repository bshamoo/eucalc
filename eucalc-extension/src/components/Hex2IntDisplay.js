import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Hex2IntDisplay = () => {
  const [hex, setHex] = useState("");
  const [int, setInt] = useState("");
  return (
    <Container fluid className="my-3">
      <Row className="justify-content-center align-items-center my-3">
        <Col className="text-center">
          <input
            type="text"
            id="top-h2i"
            value={hex}
            placeholder="0"
            onChange={(h) => setHex(h.currentTarget.value)}
          />
          <sub> 16</sub>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center my-3">
        <Col className="text-center">
          <button
            type="button"
            className="btn"
            id="btn-blue"
            onClick={() =>
              !isNaN(parseInt(hex, 16).toString())
                ? setInt(parseInt(hex, 16).toString())
                : setInt("ValueError: Please enter a hexadecimal value")
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
            id="bottom-h2i"
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
            onClick={() => setInt("") & setHex("")}
          >
            Reset
          </button>
        </Col>
      </Row>
    </Container>
  );
};
export default Hex2IntDisplay;
