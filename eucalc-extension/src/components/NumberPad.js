import React, { useState } from "react";
// Import math.js functions
import { create, all, round } from "mathjs";
// Import Bootstrap Layout
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// Import Components
import NumberDisplay from "./NumberDisplay";
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

const NumberPad = () => {
  // Evaluated expression value
  const [value, setValue] = useState("0");
  // Stores previous evaluated expression in "Ans" button
  const [prev, setPrev] = useState("0");
  // Checks if an error is currently being displayed
  const [error, setError] = useState(false);

  const numberPadHandler = (content) => () => {
    const num = parseFloat(value);
    var ans = 0;

    // Function Operators
    if (content === "CE") {
      setError(false);
      setValue("0");
      return;
    }
    // Checks if error is currently displayed
    if (error === false) {
      if (content === "Ans") {
        if (value === "0") {
          setValue(parseFloat(num + prev).toString());
          return;
        } else {
          setValue((value + prev).toString());
          return;
        }
      }
      if (content === "=") {
        try {
          ans = round(limitedEvaluate(value), 6).toString();
          // Divison by Zero Error Handling
          if (ans === "Infinity" || ans === "-Infinity") {
            setValue("ValueError: ± Infinity");
            setError(true);
            return;
          } else {
            setPrev(ans);
            setValue(ans);
            console.log(ans);
            return;
          }
          // NaN and Syntax Error Handling
        } catch (e) {
          setValue(`${e}`);
          setError(true);
          return;
        }
      }

      // Parentheses and Decimal
      if (content === "(") {
        if (value === "0") {
          setValue("( ");
          return;
        } else {
          setValue(value + " ( ");
          return;
        }
      }
      if (content === ")") {
        if (value === "0") {
          setValue(" )");
          return;
        } else {
          setValue(value + " ) ");
          return;
        }
      }
      if (content === ".") {
        setValue(value + ".");
        return;
      }

      // Basic Algebra
      if (content === "+") {
        setValue(value + " + ");
        return;
      }
      if (content === "-") {
        setValue(value + " - ");
        return;
      }
      if (content === "÷") {
        setValue(value + " / ");
        return;
      }
      if (content === "×") {
        setValue(value + " * ");
        return;
      }

      // Advanced Algebra
      if (content === "^") {
        setValue(value + " ^ ");
        return;
      }
      if (content === "!") {
        setValue(value + "!");
        return;
      }
      if (content === "√") {
        if (value === "0") {
          setValue("sqrt( ");
          return;
        } else {
          setValue(value + " sqrt( ");
          return;
        }
      }

      // Euclidean Operators
      if (content === "%") {
        setValue(value + " % ");
        return;
      }
      if (content === "//") {
        setValue(value + " // ");
        return;
      }

      // Digit Concatenation
      if (value === "0") {
        setValue(parseFloat(value + content).toString());
        return;
      } else {
        setValue((value + content).toString());
        return;
      }
    }
    return;
  };

  // Button input matrix for mapping
  const inputs = [
    [
      { operator: "CE", content: "CE", color: "btn-yellow", id: "clear" },
      { operator: "(", content: "(", color: "btn-red", id: "l-para" },
      { operator: ")", content: ")", color: "btn-red", id: "r-para" },
      { operator: "!", content: "!", color: "btn-red", id: "fact" },
      { operator: "÷", content: "÷", color: "btn-gray", id: "div" },
    ],
    [
      { operator: "%", content: "%", color: "btn-green", id: "mod" },
      { operator: "7", content: "7", color: "btn-lightgray", id: "7" },
      { operator: "8", content: "8", color: "btn-lightgray", id: "8" },
      { operator: "9", content: "9", color: "btn-lightgray", id: "9" },
      { operator: "×", content: "×", color: "btn-gray", id: "mult" },
    ],
    [
      { operator: "//", content: "//", color: "btn-green", id: "int-div" },
      { operator: "4", content: "4", color: "btn-lightgray", id: "4" },
      { operator: "5", content: "5", color: "btn-lightgray", id: "5" },
      { operator: "6", content: "6", color: "btn-lightgray", id: "6" },
      { operator: "-", content: "-", color: "btn-gray", id: "-" },
    ],
    [
      { operator: "√", content: "√", color: "btn-green", id: "sqrt" },
      { operator: "1", content: "1", color: "btn-lightgray", id: "1" },
      { operator: "2", content: "2", color: "btn-lightgray", id: "2" },
      { operator: "3", content: "3", color: "btn-lightgray", id: "3" },
      { operator: "+", content: "+", color: "btn-gray", id: "add" },
    ],
    [
      { operator: "^", content: "^", color: "btn-green", id: "exp" },
      { operator: ".", content: ".", color: "btn-lightgray", id: "dec" },
      { operator: "0", content: "0", color: "btn-lightgray", id: "0" },
      { operator: "Ans", content: "Ans", color: "btn-lightgray", id: "ans" },
      { operator: "=", content: "=", color: "btn-blue", id: "eq" },
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
              onclick={numberPadHandler(col.content)}
              key={col.id}
            />
          ))}
        </Row>
      ))}
      <hr className="my-3"></hr>
    </Container>
  );
};

export default NumberPad;
