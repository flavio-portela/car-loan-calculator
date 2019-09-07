import React from 'react';
import styles from './PaymentSummary.styles';

const PaymentsSummary = () => {
  return (
    <div css={styles}>
      <div className="monthlyPayment">
        <span>Monthly Payment</span>
        <h2>$0.00</h2>
      </div>
      <hr />
      <div className="totalInterests">
        <span>Total Interest:</span>
        <h3>$0.00</h3>
      </div>
    </div>
  );
}

export default PaymentsSummary;