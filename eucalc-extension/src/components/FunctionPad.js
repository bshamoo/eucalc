import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Operators from "./Operators";

const FunctionPad = () => {
  const inputs = [
    [
      { operator: "GCD", color: "btn-GCD" },
      { operator: "Fast Mod Exp", color: "btn-FME" },
    ],
    [
      { operator: "Int to Bin", color: "btn-BIN" },
      { operator: "Int to Hex", color: "btn-HEX" },
    ],
  ];

  return (
    <Container fluid className="my-3">
      {inputs.map((row, index) => (
        <Row
          className="justify-content-center align-items-center mb-1"
          key={index}
        >
          {row.map((col) => (
            <Operators
              operator={col.operator}
              color={col.color}
              key={col.toString()}
            />
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default FunctionPad;
