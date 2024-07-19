import React, { useState } from 'react';
import './MortgageCalculator.css';

const MortgageCalculator = () => {
  const [housePrice, setHousePrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [email, setEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);

  const calculateMonthlyPayment = () => {
    const principal = housePrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = 30 * 12; // 30 years mortgage

    const monthly = 
      (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    setMonthlyPayment(monthly.toFixed(2));
    setShowEmailInput(true);
  };

  const handleEmailSubmit = () => {
    console.log(email);
  };

  return (
    <div className="calculator">
      <h1>Mortgage Calculator</h1>
      <div className="input-container">
        <input
          type="number"
          id="housePrice"
          value={housePrice}
          onChange={(e) => setHousePrice(e.target.value)}
          placeholder="House Price"
        />
        <input
          type="number"
          id="downPayment"
          value={downPayment}
          onChange={(e) => setDownPayment(e.target.value)}
          placeholder="Down Payment"
        />
        <input
          type="number"
          id="interestRate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="Interest Rate (%)"
        />
      </div>
      <button onClick={calculateMonthlyPayment}>Calculate</button>
      {monthlyPayment !== null && (
        <div className="result">
          <h2 id="monthlyPayment">Monthly Payment: ${monthlyPayment}</h2>
        </div>
      )}
      {showEmailInput && (
        <div className="email-container">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button onClick={handleEmailSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default MortgageCalculator;
