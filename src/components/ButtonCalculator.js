import React from "react";
import "../styles/Button.css";

const ButtonCalculator = (props) => {
  const isOperator = (value) => {
    return isNaN(value) && value != "." && value != "=";
  };

  return (
    <div
      className={`container-button ${
        isOperator(props.children) ? "operator" : ""
      }`.trimEnd()}
      onClick={() => props.handlerClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default ButtonCalculator;
