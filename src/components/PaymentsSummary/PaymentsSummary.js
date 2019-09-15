import React from "react";
import styles from "./PaymentSummary.styles";
import { formatPrice } from "../../utils/prices";

const PaymentsSummary = ({ monthlyPayment, totalInterests, className }) => {
  return (
    <div css={styles} className={className}>
      <div className="monthlyPayment">
        <span>Monthly Payment</span>
        <h2>{formatPrice(monthlyPayment)}</h2>
      </div>
      <hr />
      <div className="totalInterests">
        <span>Total Interest:</span>
        <h3>{formatPrice(totalInterests)}</h3>
      </div>
    </div>
  );
};

export default PaymentsSummary;
