import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Operators from "./Operators";

const NumberPad = () => {
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
      <hr className="my-3"></hr>
    </Container>
  );
};

export default NumberPad;
