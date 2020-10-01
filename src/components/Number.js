import React, { useState } from "react";
import calculate from "./Calculate";

function Number() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const number = (number) => {
    setNum1(num1 + number);
  };
  const handleClickOperator = (operator) => {
    setOperator(operator);
    setNum2(num1);
    setNum1(" ");
  };

  return (
    <>
      <div className="output">{num1}</div>
      <div>
        <button onClick={() => number("1")}>1</button>
        <button onClick={() => number("2")}>2</button>
        <button onClick={() => number("3")}>3</button>
      </div>
      <div>
        <button onClick={() => number("4")}>4</button>
        <button onClick={() => number("5")}>5</button>
        <button onClick={() => number("6")}>6</button>
      </div>
      <div>
        <button onClick={() => number("7")}>7</button>
        <button onClick={() => number("8")}>8</button>
        <button onClick={() => number("9")}>9</button>
      </div>
      <div>
        <button onClick={() => number("0")}>0</button>
      </div>
      <div>
        <button onClick={() => handleClickOperator("+")}>+</button>
        <button onClick={() => handleClickOperator("-")}>-</button>
        <button onClick={() => handleClickOperator("*")}>*</button>
        <button onClick={() => handleClickOperator("/")}>/</button>
      </div>
      <div>
        <button onClick={() => calculate(num1, num2, setNum1, operator)}>
          =
        </button>
      </div>
    </>
  );
}

export default Number;
