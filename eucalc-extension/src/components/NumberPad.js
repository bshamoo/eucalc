import React, { useState } from "react";
import { evaluate } from "mathjs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NumberDisplay from "./NumberDisplay";
import Buttons from "./Buttons";

const NumberPad = () => {
  const [value, setValue] = useState("0");
  const [prev, setPrev] = useState(null);

  const handleButtonPress = (content) => () => {
    const num = parseFloat(value);

    if (content === "AC") {
      setPrev(value);
      setValue("0");
      return;
    }
    if (content === "Ans") {
      setValue(prev);
      return;
    }
    if (content === "+") {
      setValue(value + " + ");
      return;
    }

    if (content === "=") {
      setValue(evaluate(value));
      return;
    }

    if (value === "0") {
      setValue(parseFloat(num + content).toString());
      return;
    } else {
      setValue((value + content).toString());
      return;
    }
  };

  const inputs = [
    [
      { operator: "AC", content: "AC", color: "btn-yellow", onclick: "" },
      { operator: "(", content: "(", color: "btn-red", onclick: "" },
      { operator: ")", content: ")", color: "btn-red", onclick: "" },
      { operator: "!", content: "!", color: "btn-red", onclick: "" },
      { operator: "÷", content: "÷", color: "btn-gray", onclick: "" },
    ],
    [
      { operator: "%", content: "%", color: "btn-green", onclick: "" },
      { operator: "7", content: "7", color: "btn-lightgray", onclick: "" },
      { operator: "8", content: "8", color: "btn-lightgray", onclick: "" },
      { operator: "9", content: "9", color: "btn-lightgray", onclick: "" },
      { operator: "×", content: "×", color: "btn-gray", onclick: "" },
    ],
    [
      { operator: "//", content: "//", color: "btn-green", onclick: "" },
      { operator: "4", content: "4", color: "btn-lightgray", onclick: "" },
      { operator: "5", content: "5", color: "btn-lightgray", onclick: "" },
      { operator: "6", content: "6", color: "btn-lightgray", onclick: "" },
      { operator: "-", content: "-", color: "btn-gray", onclick: "" },
    ],
    [
      { operator: "√", content: "√", color: "btn-green", onclick: "" },
      { operator: "1", content: "1", color: "btn-lightgray", onclick: "" },
      { operator: "2", content: "2", color: "btn-lightgray", onclick: "" },
      { operator: "3", content: "3", color: "btn-lightgray", onclick: "" },
      { operator: "+", content: "+", color: "btn-gray", onclick: "" },
    ],
    [
      { operator: "^", content: "^", color: "btn-green", onclick: "" },
      { operator: "±", content: "±", color: "btn-lightgray", onclick: "" },
      { operator: "0", content: "0", color: "btn-lightgray", onclick: "" },
      { operator: "Ans", content: "Ans", color: "btn-lightgray", onclick: "" },
      { operator: "=", content: "=", color: "btn-blue", onclick: "" },
    ],
  ];

  return (
    <Container fluid className="my-3">
      <NumberDisplay value={value} />
      {inputs.map((row, index) => (
        <Row
          className="justify-content-center align-items-center mb-1"
          key={index}
        >
          {row.map((col) => (
            <Buttons
              operator={col.operator}
              color={col.color}
              onclick={handleButtonPress(col.content)}
            />
          ))}
        </Row>
      ))}
      <hr className="my-3"></hr>
    </Container>
  );
};

export default NumberPad;
