import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Buttons from "./Buttons";
import FunctionDisplay from "./FunctionDisplay";

const FunctionPad = () => {
  const [state, setState] = useState("");
  const functionPadHandler = (content) => () => {
    if (content === "GCD") {
      setState(content);
      console.log(content);
      return <FunctionDisplay state={state} />;
    } else {
      return;
    }
  };

  const inputs = [
    [
      { operator: "Logic", content: "Logic", color: "btn-GCD", id: "log" },
      { operator: "Bitwise", content: "Bitwise", color: "btn-GCD", id: "bit" },
      { operator: "GCD", content: "GCD", color: "btn-FME", id: "gcd" },
      {
        operator: "FastModExp",
        content: "FastModExp",
        color: "btn-FME",
        id: "fme",
      },
    ],
    [
      {
        operator: "Int to Bin",
        content: "Int to Bin",
        color: "btn-BIN",
        id: "i2b",
      },
      {
        operator: "Bin to Int",
        content: "Bin to Int",
        color: "btn-BIN",
        id: "b2i",
      },
      {
        operator: "Int to Hex",
        content: "Int to Hex",
        color: "btn-HEX",
        id: "i2h",
      },
      {
        operator: "Hex to Int",
        content: "Hex to Int",
        color: "btn-HEX",
        id: "h2i",
      },
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
              key={col.id}
              onclick={functionPadHandler(col.content)}
            />
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default FunctionPad;
