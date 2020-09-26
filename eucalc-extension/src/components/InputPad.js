import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Operators from "./Operators";

const InputPad = () => {
  const inputs = [
    [
      { operator: "AC", color: "btn-yellow" },
      { operator: "(", color: "btn-red" },
      { operator: ")", color: "btn-red" },
      { operator: "!", color: "btn-red" },
      { operator: "÷", color: "btn-gray" },
    ],
    [
      { operator: "%", color: "btn-green" },
      { operator: "7", color: "btn-lightgray" },
      { operator: "8", color: "btn-lightgray" },
      { operator: "9", color: "btn-lightgray" },
      { operator: "×", color: "btn-gray" },
    ],
    [
      { operator: "//", color: "btn-green" },
      { operator: "4", color: "btn-lightgray" },
      { operator: "5", color: "btn-lightgray" },
      { operator: "6", color: "btn-lightgray" },
      { operator: "-", color: "btn-gray" },
    ],
    [
      { operator: "√", color: "btn-green" },
      { operator: "1", color: "btn-lightgray" },
      { operator: "2", color: "btn-lightgray" },
      { operator: "3", color: "btn-lightgray" },
      { operator: "+", color: "btn-gray" },
    ],
    [
      { operator: "^", color: "btn-green" },
      { operator: "±", color: "btn-lightgray" },
      { operator: "0", color: "btn-lightgray" },
      { operator: "Ans", color: "btn-lightgray" },
      { operator: "=", color: "btn-blue" },
    ],
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
      <Row className="justify-content-center align-items-center mb-1" id="zero">
        {inputs[0].map((input) => (
          <Operators
            operator={input.operator}
            color={input.color}
            key={input.toString()}
          />
        ))}
      </Row>
      <Row className="justify-content-center align-items-center mb-1" id="one">
        {inputs[1].map((input) => (
          <Operators
            operator={input.operator}
            color={input.color}
            key={input.toString()}
          />
        ))}
      </Row>
      <Row className="justify-content-center align-items-center mb-1" id="two">
        {inputs[2].map((input) => (
          <Operators
            operator={input.operator}
            color={input.color}
            key={input.toString()}
          />
        ))}
      </Row>
      <Row
        className="justify-content-center align-items-center mb-1"
        id="three"
      >
        {inputs[3].map((input) => (
          <Operators
            operator={input.operator}
            color={input.color}
            key={input.toString()}
          />
        ))}
      </Row>
      <Row className="justify-content-center align-items-center mb-1" id="four">
        {inputs[4].map((input) => (
          <Operators
            operator={input.operator}
            color={input.color}
            key={input.toString()}
          />
        ))}
      </Row>
      <hr className="my-3"></hr>
      <Row className="justify-content-center align-items-center mb-1" id="five">
        {inputs[5].map((input) => (
          <Operators
            operator={input.operator}
            color={input.color}
            key={input.toString()}
          />
        ))}
      </Row>
      <Row className="justify-content-center align-items-center mb-1" id="six">
        {inputs[6].map((input) => (
          <Operators
            operator={input.operator}
            color={input.color}
            key={input.toString()}
          />
        ))}
      </Row>
    </Container>
  );
};

export default InputPad;
