import React, { useState } from "react";
// Import math.js functions
import { create, all } from "mathjs";
// Import Bootstrap Layout
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Import Components
import Buttons from "./Buttons";

// Limited Eval: disabled vulnerable functions whilst still supporting most functionality
const math = create(all);
const limitedEvaluate = math.evaluate;

math.import(
  {
    evaluate: function () {
      throw new Error("Function evaluate is disabled");
    },
  },
  { override: true }
);

const LogicDisplay = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const logicPad = (content) => () => {
    var ans = "";
    // Function Operators
    if (content === "CE") {
      setError(false);
      setValue("");
      return;
    }
    // Checks if error is currently displayed
    if (error === false) {
      if (content === "=") {
        try {
          ans = limitedEvaluate(value);
          setValue(ans);
          console.log(ans);
          return;
        } catch (e) {
          // NaN and Syntax Error Handling
          setValue(`${e}`);
          setError(true);
          return;
        }
      }

      // Parentheses and Decimal
      if (content === "(") {
        if (value === "") {
          setValue("( ");
          return;
        } else {
          setValue(value + " ( ");
          return;
        }
      }
      if (content === ")") {
        if (value === "") {
          setValue(") ");
          return;
        } else {
          setValue(value + " ) ");
          return;
        }
      }

      if (content === "not") {
        setValue(value + " not ");
        return;
      }

      if (content === "and") {
        if (value === "") {
          return;
        } else {
          setValue(value + " and ");
          return;
        }
      }
      if (content === "or") {
        if (value === "") {
          return;
        } else {
          setValue(value + " or ");
          return;
        }
      }
      if (content === "xor") {
        if (value === "") {
          return;
        } else {
          setValue(value + " xor ");
          return;
        }
      }

      // Digit Concatenation
      if (value === "") {
        setValue(value + content);
        return;
      } else {
        setValue(value + content);
        return;
      }
    }
    return;
  };

  // Inputs for logic button mapping
  const inputs = [
    [
      { operator: "CE", content: "CE", color: "btn-yellow", id: "logic-clear" },
      { operator: "(", content: "(", color: "btn-red", id: "logic-lpara" },
      { operator: ")", content: ")", color: "btn-red", id: "logic-rpara" },
      { operator: "true", content: "true", color: "btn-gray", id: "p" },
      { operator: "false", content: "false", color: "btn-gray", id: "q" },
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
        <Col className="text-center px-1">
          <input
            type="text"
            id="logic-display"
            value={value}
            placeholder="0"
            className="text-right"
            disabled
          />
        </Col>
      </Row>
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
              onclick={logicPad(col.content)}
            />
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default LogicDisplay;
