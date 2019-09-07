import React, { useState, useEffect } from "react";
import styles from "./CalculatorForm.styles";
import validationSchema from "./validationSchema";
import classNames from "classnames";

const CalculatorForm = ({ onSubmit }) => {
  const [formErrors, setFormErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [formValues, setFormValues] = useState({
    carPrice: 10000,
    downPayment: 0,
    loanDuration: 12, // In Months
    interestRate: 4.5 // Per Year
  });

  useEffect(() => {
    validationSchema.isValid(formValues).then(isValid => setIsValid(isValid));
  }, [formValues]);

  const validateField = (fieldName, newValues) => {
    validationSchema
      .validate(newValues)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [fieldName]: undefined
        });
      })
      .catch(error => {
        setFormErrors({
          ...formErrors,
          [error.path]: error.errors[0]
        });
      });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    const newValues = { ...formValues, [name]: value };
    validateField(name, newValues);
    setFormValues(newValues);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isValid) {
      onSubmit(validationSchema.cast(formValues));
    }
  };

  const { carPrice, downPayment, loanDuration, interestRate } = formValues;
  return (
    <form onSubmit={handleSubmit} css={styles}>
      <div>
        <label htmlFor="carPrice">Card Price:</label>
        <div className="formField">
          <input
            type="text"
            className={classNames({ error: formErrors.carPrice })}
            value={carPrice}
            onChange={handleInputChange}
            id="cardPrice"
            name="carPrice"
          />
          <span>{formErrors.carPrice}</span>
        </div>
      </div>
      <div>
        <label htmlFor="downPayment">Down Payment:</label>
        <div className="formField">
          <input
            type="text"
            className={classNames({ error: formErrors.downPayment })}
            value={downPayment}
            onChange={handleInputChange}
            id="downPayment"
            name="downPayment"
          />
          <span>{formErrors.downPayment}</span>
        </div>
      </div>
      <div>
        <label htmlFor="loanDuration">Loan Duration:</label>
        <div className="formField">
          <input
            type="text"
            className={classNames({ error: formErrors.loanDuration })}
            value={loanDuration}
            onChange={handleInputChange}
            id="loanDuration"
            name="loanDuration"
          />
          <span>{formErrors.loanDuration}</span>
        </div>
      </div>
      <div>
        <label htmlFor="interestRate">Interest Rate:</label>
        <div className="formField">
          <input
            type="text"
            className={classNames({ error: formErrors.interestRate })}
            value={interestRate}
            onChange={handleInputChange}
            id="interestRate"
            name="interestRate"
          />
          <span>{formErrors.interestRate}</span>
        </div>
      </div>
      <div>
        <button type="submit">Calculate</button>
      </div>
    </form>
  );
};

export default CalculatorForm;
