import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Import Components
import Buttons from "./Buttons";

const LogicDisplay = () => {
  const inputs = [
    [
      { operator: "CE", content: "CE", color: "btn-yellow", id: "logic-clear" },
      { operator: "(", content: "(", color: "btn-red", id: "logic-lpara" },
      { operator: ")", content: ")", color: "btn-red", id: "logic-rpara" },
      { operator: "p", content: "p", color: "btn-gray", id: "p" },
      { operator: "q", content: "q", color: "btn-gray", id: "q" },
    ],
    [
      { operator: "not", content: "not", color: "btn-green", id: "not" },
      { operator: "and", content: "and", color: "btn-green", id: "and" },
      { operator: "or", content: "or", color: "btn-green", id: "or" },
      { operator: "xor", content: "xor", color: "btn-green", id: "xor" },
      { operator: "=", content: "=", color: "btn-blue", id: "logic-eq" },
    ],
  ];
  return (
    <Container fluid className="my-3">
      <Row className="justify-content-center align-items-center my-3">
        <Col className="text-center">
          <input
            type="text"
            id="logic-display"
            name="logic-display"
            placeholder="0"
            className="text-right"
          />
        </Col>
      </Row>
      {inputs.map((row, index) => (
        <Row
          className="justify-content-center align-items-center mb-1"
          key={index}
        >
          {row.map((col) => (
            <Buttons operator={col.operator} color={col.color} key={col.id} />
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default LogicDisplay;
