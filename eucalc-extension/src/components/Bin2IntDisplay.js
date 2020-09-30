import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Bin2IntDisplay = () => {
  const [bin, setBin] = useState("");
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
              !isNaN(parseInt(bin, 2).toString())
                ? setInt(parseInt(bin, 2).toString())
                : setInt("ValueError: Please enter a binary value")
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
