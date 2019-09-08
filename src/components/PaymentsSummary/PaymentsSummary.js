import React from 'react';
import styles from './PaymentSummary.styles';

const PaymentsSummary = ({ monthlyPayment, totalInterests }) => {
  return (
    <div css={styles}>
      <div className="monthlyPayment">
        <span>Monthly Payment</span>
        <h2>${monthlyPayment.toFixed(2)}</h2>
      </div>
      <hr />
      <div className="totalInterests">
        <span>Total Interest:</span>
        <h3>${totalInterests.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default PaymentsSummary;