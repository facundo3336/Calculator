import { useState } from "react";
import {
  derivative,
  division,
  exponent,
  getDecimalsPlaces,
  multiplication,
  percentage,
  root,
  sub,
  sum,
} from "../operations/operations";
import "./Calc.scss";

export const Calc = ({}) => {
  const [value, setValue] = useState(0);
  const [storedValue, setStoredValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [isEnteringDecimal, setIsEnteringDecimal] = useState(false);

  function addDigit(number) {
    if (isEnteringDecimal) {
      setValue(value + number / Math.pow(10, getDecimalsPlaces(value) + 1)); // no entendi
      console.log(number / Math.pow(10, getDecimalsPlaces(value) + 1));
    } else {
      setValue(value * 10 + number);
    }
  }

  function removeDigit() {
    setValue(Math.floor(value / 10)); // no entendi
  }

  function handleOperationClick(operation) {
    setOperation(() => operation);
    setIsEnteringDecimal(false);
    setStoredValue(value);
    setValue(0);
  }

  function handleEqualsClick() {
    const result = operation(storedValue, value);
    setValue(result);
    setStoredValue(0);
  }

  function clickInstantCalcs(operation) {
    const instantOperation = operation(value);

    setValue(instantOperation);
  }

  function handleChangeSymbolClick() {
    setValue(value * -1);
  }

  function handleDecimalClick() {
    setIsEnteringDecimal(!isEnteringDecimal);
  }

  return (
    <div className="calcContainer">
      <div className="totalNumber">
        <span>{value}</span>
      </div>
      <div className="symbols">
        <button onClick={() => handleOperationClick(sum)}>+</button>
        <button onClick={() => handleOperationClick(sub)}>-</button>
        <button onClick={() => handleOperationClick(multiplication)}>*</button>
        <button onClick={() => handleOperationClick(division)}>/</button>
        <button onClick={() => clickInstantCalcs(root)}>√</button>
        <button onClick={() => clickInstantCalcs(exponent)}>χ²</button>
        <button onClick={() => clickInstantCalcs(derivative)}>1/X</button>
        <button onClick={() => handleOperationClick(percentage)}>%</button>
        <button onClick={handleEqualsClick}>=</button>
      </div>
      <div className="calcNumbersContainer">
        <button onClick={() => addDigit(1)}>1</button>
        <button onClick={() => addDigit(2)}>2</button>
        <button onClick={() => addDigit(3)}>3</button>
        <button onClick={() => addDigit(4)}>4</button>
        <button onClick={() => addDigit(5)}>5</button>
        <button onClick={() => addDigit(6)}>6</button>
        <button onClick={() => addDigit(7)}>7</button>
        <button onClick={() => addDigit(8)}>8</button>
        <button onClick={() => addDigit(9)}>9</button>
        <button onClick={handleChangeSymbolClick}>+/-</button>
        <button onClick={() => addDigit(0)}>0</button>
        <button onClick={handleDecimalClick}>.</button>
        <button onClick={() => removeDigit()}>←</button>
        <button onClick={() => setValue(0)}>c</button>
      </div>
    </div>
  );
};
