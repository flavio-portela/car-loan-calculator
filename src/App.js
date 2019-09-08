import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { Global } from "@emotion/core";
import styles, { globalStyles } from "./App.styles";
import CalculatorForm from "./components/CalculatorForm";
import PaymentsSummary from "./components/PaymentsSummary";
import AmortizationTable from "./components/AmortizationTable";
import { calculateLoan, calculateAmortization } from "./utils/loanCalculator";

const loanInitialValues = {
  carPrice: 10000,
  downPayment: 0,
  loanDurationMonths: 12,
  interestRate: 4.5 // Per Year
};

function App() {
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterests, setTotalInterest] = useState(0);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);

  // Calculate loan with the initial values when the component mounts
  useEffect(() => {
    updateLoanValues(loanInitialValues);
  }, []);

  // Calculate loan when the user submits new values
  const handleSubmit = values => {
    updateLoanValues(values);
  };

  const updateLoanValues = values => {
    const { carPrice, downPayment, loanDurationMonths, interestRate } = values;
    const principal = carPrice - downPayment;
    const { monthlyPayment, totalInterests } = calculateLoan({
      principal,
      duration: loanDurationMonths,
      interestRate
    });
    const amortizationSchedule = calculateAmortization({
      monthlyPayment,
      annualRate: interestRate,
      totalMonths: loanDurationMonths,
      principal: carPrice
    });
    setMonthlyPayment(monthlyPayment);
    setTotalInterest(totalInterests);
    setAmortizationSchedule(amortizationSchedule);
  };

  return (
    <div css={styles}>
      <Global styles={globalStyles} />
      <header>
        <h1>Loan Calculator 🚗</h1>
      </header>
      <div>
        <section className="calculatorWrapper">
          <CalculatorForm
            initialValues={loanInitialValues}
            onSubmit={handleSubmit}
          />
          <PaymentsSummary
            monthlyPayment={monthlyPayment}
            totalInterests={totalInterests}
          />
        </section>
        <AmortizationTable amortizationSchedule={amortizationSchedule} />
      </div>
    </div>
  );
}

export default hot(App);
