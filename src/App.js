import React from "react";
import { hot } from "react-hot-loader/root";
import { Global } from "@emotion/core";
import styles, { globalStyles } from "./App.styles";
import CalculatorForm from "./components/CalculatorForm";
import PaymentsSummary from './components/PaymentsSummary';

function App() {
  return (
    <div css={styles}>
      <Global styles={globalStyles} />
      <header>
        <h1>Loan Calculator 🚗</h1>
      </header>
      <div>
        <section className='calculatorWrapper'>
          <CalculatorForm
            onSubmit={values => {
              // Calculate Loan Here
              console.log(values);
            }}
          />
          <PaymentsSummary />
        </section>
      </div>
    </div>
  );
}

export default hot(App);
