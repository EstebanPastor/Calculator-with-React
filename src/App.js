import ButtonCalculator from "./components/ButtonCalculator";
import ClearButton from "./components/ClearButton";
import Display from "./components/Display";
import { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const addInput = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Please write a number");
    }
  };

  return (
    <div className="App">
      <div className="calculator-container">
        <Display input={input} />
        <div className="rows">
          <ButtonCalculator handlerClick={addInput}>1</ButtonCalculator>
          <ButtonCalculator handlerClick={addInput}>2</ButtonCalculator>
          <ButtonCalculator handlerClick={addInput}>3</ButtonCalculator>
          <ButtonCalculator handlerClick={addInput}>+</ButtonCalculator>
        </div>
        <div className="rows">
          <ButtonCalculator handlerClick={addInput}>4</ButtonCalculator>
          <ButtonCalculator handlerClick={addInput}>5</ButtonCalculator>
          <ButtonCalculator handlerClick={addInput}>6</ButtonCalculator>
          <ButtonCalculator handlerClick={addInput}>-</ButtonCalculator>
        </div>
        <div className="rows">
          <ButtonCalculator handlerClick={addInput}>7</ButtonCalculator>
          <ButtonCalculator handlerClick={addInput}>8</ButtonCalculator>
          <ButtonCalculator handlerClick={addInput}>9</ButtonCalculator>
          <ButtonCalculator handlerClick={addInput}>*</ButtonCalculator>
        </div>
        <div className="rows">
          <ButtonCalculator handlerClick={calculateResult}>=</ButtonCalculator>
          <ButtonCalculator handlerClick={addInput}>0</ButtonCalculator>
          <ButtonCalculator handlerClick={addInput}>.</ButtonCalculator>
          <ButtonCalculator handlerClick={addInput}>/</ButtonCalculator>
        </div>
        <div className="rows">
          <ClearButton handlerClearButton={() => setInput("")}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
