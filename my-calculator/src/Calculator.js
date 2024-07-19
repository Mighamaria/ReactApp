import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState(null);

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const calculateResult = () => {
    let res;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (operation) {
      case 'add':
        res = n1 + n2;
        break;
      case 'subtract':
        res = n1 - n2;
        break;
      case 'multiply':
        res = n1 * n2;
        break;
      case 'divide':
        res = n1 / n2;
        break;
      default:
        res = 'Invalid operation';
    }

    setResult(res);
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="input-container">
        <input type="number" value={num1} onChange={handleNum1Change} placeholder="First Number" />
        <input type="number" value={num2} onChange={handleNum2Change} placeholder="Second Number" />
      </div>

      <div className="operation-container">
        <select value={operation} onChange={handleOperationChange}>
          <option value="">Select Operation</option>
          <option value="add">Addition</option>
          <option value="subtract">Subtraction</option>
          <option value="multiply">Multiplication</option>
          <option value="divide">Division</option>
        </select>
        <button onClick={calculateResult}>Calculate</button>
      </div>
      
      {result !== null && (
        <div className="result">
          <h2>Result: {result}</h2>
        </div>
      )}
    </div>
  );
};

export default Calculator;
