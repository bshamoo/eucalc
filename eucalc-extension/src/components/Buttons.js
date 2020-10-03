import React from "react";
// Import Bootstrap Layout
import Col from "react-bootstrap/Col";

const Buttons = (props) => {
  return (
    <Col className="text-center px-1">
      <button
        type="button"
        className="btn btn-block"
        id={props.color}
        onClick={props.onclick}
        key={props.keyid}
      >
        {props.operator}
      </button>
    </Col>
  );
};
export default Buttons;
