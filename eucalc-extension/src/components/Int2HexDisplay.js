import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Int2HexDisplay = () => {
  const [int, setInt] = useState("");
  const [hex, setHex] = useState("");

  return (
    <Container fluid className="my-3">
      <Row className="justify-content-center align-items-center my-3">
        <Col className="text-center">
          <input
            type="text"
            id="top-i2h"
            value={int}
            placeholder="0"
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
              Number.isInteger(parseFloat(+int)) & !isNaN(parseFloat(+int))
                ? setHex(parseInt(int).toString(16).toUpperCase())
                : setHex("ValueError: Please enter an integer value")
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
            id="bottom-i2h"
            value={hex}
            placeholder="0"
            disabled
          />
          <sub> 16</sub>
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
export default Int2HexDisplay;
