import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Buttons from "./Buttons";

const FunctionPad = () => {
  const inputs = [
    [
      { operator: "GCD", color: "btn-GCD", onclick: "" },
      { operator: "Fast Mod Exp", color: "btn-FME", onclick: "" },
    ],
    [
      { operator: "Int to Bin", color: "btn-BIN", onclick: "" },
      { operator: "Int to Hex", color: "btn-HEX", onclick: "" },
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
            <Buttons
              operator={col.operator}
              color={col.color}
              onclick={col.onclick}
              key={col.toString()}
            />
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default FunctionPad;
