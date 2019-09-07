import React from "react";
import styles from "./App.styles";
import CalculatorForm from './components/CalculatorForm';

function App() {
  return (
    <div className={styles}>
      <header>
        <h2>Loan Calculator 🚗</h2>
      </header>
      <div>
        <section>
          <CalculatorForm />
        </section>
      </div>
    </div>
  );
}

export default App;
