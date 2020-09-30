import React from "react";
import Col from "react-bootstrap/Col";

const Buttons = (props) => {
  return (
    <Col className="text-center">
      <button
        type="button"
        className="btn btn-block"
        id={props.color}
        onClick={props.onclick}
        key={props.key}
      >
        {props.operator}
      </button>
    </Col>
  );
};
export default Buttons;
