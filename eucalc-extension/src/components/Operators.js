import React from "react";
import Col from "react-bootstrap/Col";

const Operators = (props) => (
  <Col className="text-center">
    <button type="button" className="btn btn-block" id={props.color}>
      {props.operator}
    </button>
  </Col>
);

export default Operators;
