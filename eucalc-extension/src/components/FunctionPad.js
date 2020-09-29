import React, { useState } from "react";
// Import Bootstrap layout
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// Import Components
import Buttons from "./Buttons";
import LogicDisplay from "./LogicDisplay";
import GCDDisplay from "./GCDDisplay";
import FMEDisplay from "./FMEDisplay";
import Int2BinDisplay from "./Int2BinDisplay";
import Bin2IntDisplay from "./Bin2IntDisplay";
import Int2HexDisplay from "./Int2HexDisplay";
import Hex2IntDisplay from "./Hex2IntDisplay";

const FunctionPad = () => {
  const [state, setState] = useState("");

  const functionPadHandler = (content) => () => {
    if (content === "Logic") {
      setState(<LogicDisplay />);
      console.log(content);
      return;
    }
    if (content === "Bitwise") {
      console.log(content);
      return;
    }
    if (content === "GCD") {
      setState(<GCDDisplay />);
      console.log(content);
      return;
    }
    if (content === "FastModExp") {
      setState(<FMEDisplay />);
      console.log(content);
      return;
    }
    if (content === "Int to Bin") {
      setState(<Int2BinDisplay />);
      console.log(content);
      return;
    }
    if (content === "Bin to Int") {
      setState(<Bin2IntDisplay />);
      console.log(content);
      return;
    }
    if (content === "Int to Hex") {
      setState(<Int2HexDisplay />);
      console.log(content);
      return;
    }
    if (content === "Hex to Int") {
      setState(<Hex2IntDisplay />);
      console.log(content);
      return;
    }
    return;
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
      {state}
    </Container>
  );
};

export default FunctionPad;
