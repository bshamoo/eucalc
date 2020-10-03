import React, { useState } from "react";
// Import Bootstrap layout
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// Import Components
import Buttons from "./Buttons";
import Logic from "./LogicDisplay";
import GCD from "./GCDDisplay";
import LCM from "./LCMDisplay";
import PrimeFactors from "./PrimeFactorsDisplay";
import Int2Bin from "./Int2BinDisplay";
import Bin2Int from "./Bin2IntDisplay";
import Int2Hex from "./Int2HexDisplay";
import Hex2Int from "./Hex2IntDisplay";

const FunctionPad = () => {
  const [display, setDisplay] = useState("");

  const functionPadActions = (content) => () => {
    // Logic Calculator
    if (content === "Logic") {
      setDisplay(<Logic />);
      return;
    }

    // Greatest Common Denominator
    if (content === "GCD") {
      setDisplay(<GCD />);
      return;
    }
    // Least Common Multiple
    if (content === "LCM") {
      setDisplay(<LCM />);
      return;
    }
    // Prime Factorization
    if (content === "Prime Factor") {
      setDisplay(<PrimeFactors />);
      return;
    }

    // Conversion Functions
    if (content === "Int to Bin") {
      setDisplay(<Int2Bin />);
      return;
    }
    if (content === "Bin to Int") {
      setDisplay(<Bin2Int />);
      return;
    }
    if (content === "Int to Hex") {
      setDisplay(<Int2Hex />);
      return;
    }
    if (content === "Hex to Int") {
      setDisplay(<Hex2Int />);
      return;
    }
    return;
  };

  // Inputs for function button mapping
  const inputs = [
    [
      { operator: "Logic", content: "Logic", color: "btn-GCD", id: "log" },
      {
        operator: "Prime Factor",
        content: "Prime Factor",
        color: "btn-GCD",
        id: "prime",
      },
      { operator: "GCD", content: "GCD", color: "btn-FME", id: "gcd" },
      {
        operator: "LCM",
        content: "LCM",
        color: "btn-FME",
        id: "lcd",
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
          {row.map((col, index) => (
            <Buttons
              operator={col.operator}
              color={col.color}
              key={col.id}
              keyid={index}
              onclick={functionPadActions(col.content)}
            />
          ))}
        </Row>
      ))}
      {display}
    </Container>
  );
};

export default FunctionPad;
