import React, { useState, useEffect } from "react";
import styles from "./CalculatorForm.styles";
import validationSchema from "./validationSchema";
import classNames from "classnames";

const CalculatorForm = ({ onSubmit, initialValues = {}, className }) => {
  const [formErrors, setFormErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const { loanDurationMonths: initialDuration } = initialValues;
  const [formValues, setFormValues] = useState({
    carPrice: 0,
    downPayment: 0,
    loanDurationMonths: 0,
    loanDurationYears: initialDuration ? initialDuration / 12 : 0,
    interestRate: 0, // Per Year
    ...initialValues
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

    // Calculate the duration in years
    if (name === "loanDurationMonths") {
      const loanDurationYears = value / 12;
      newValues["loanDurationYears"] = isNaN(loanDurationYears)
        ? !value
        : loanDurationYears;
    }

    // Calculate the duration in months
    if (name === "loanDurationYears") {
      const loanDurationMonths = value * 12;
      newValues["loanDurationMonths"] =
        isNaN(loanDurationMonths) || !value ? 1 : loanDurationMonths;
    }

    validateField(name, newValues);
    setFormValues(newValues);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isValid) {
      onSubmit(validationSchema.cast(formValues));
    }
  };

  const {
    carPrice,
    downPayment,
    loanDurationMonths,
    loanDurationYears,
    interestRate
  } = formValues;
  return (
    <form onSubmit={handleSubmit} css={styles} className={className}>
      <div>
        <label htmlFor="carPrice">Car Price:</label>
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
        <label htmlFor="loanDuration">Loan Duration (Months):</label>
        <div className="formField">
          <input
            type="text"
            className={classNames({ error: formErrors.loanDurationMonths })}
            value={loanDurationMonths}
            onChange={handleInputChange}
            id="loanDurationMonths"
            name="loanDurationMonths"
          />
          <span>{formErrors.loanDurationMonths}</span>
        </div>
      </div>
      <div>
        <label htmlFor="loanDuration">Loan Duration (Years):</label>
        <div className="formField">
          <input
            type="text"
            className={classNames({ error: formErrors.loanDurationYears })}
            value={loanDurationYears}
            onChange={handleInputChange}
            id="loanDurationYears"
            name="loanDurationYears"
          />
          <span>{formErrors.loanDurationYears}</span>
        </div>
      </div>
      <div>
        <label htmlFor="interestRate">Yearly Interest Rate:</label>
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
