import React, { useState } from "react";

const CalculatorForm = () => {
  const [formValues, setFormValues] = useState({
    carPrice: 10000,
    downPayment: 0,
    loanDuration: 12, // In Months
    interestRate: 4.5 // Per Year
  });

  const { carPrice, downPayment, loanDuration, interestRate } = formValues;

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form>
      <div>
        <label htmlFor="carPrice">Card Price:</label>
        <input
          type="text"
          value={carPrice}
          onChange={handleInputChange}
          id="cardPrice"
          name="carPrice"
        />
      </div>
      <div>
        <label htmlFor="downPayment">Down Payment:</label>
        <input
          type="text"
          value={downPayment}
          onChange={handleInputChange}
          id="downPayment"
          name="downPayment"
        />
      </div>
      <div>
        <label htmlFor="loanDuration">Loan Duration:</label>
        <input
          type="text"
          value={loanDuration}
          onChange={handleInputChange}
          id="loanDuration"
          name="loanDuration"
        />
      </div>
      <div>
        <label htmlFor="interestRate">Interest Rate:</label>
        <input
          type="text"
          value={interestRate}
          onChange={handleInputChange}
          id="interestRate"
          name="interestRate"
        />
      </div>
      <div>
        <button type="submit">Calculate</button>
      </div>
    </form>
  );
};

export default CalculatorForm;
