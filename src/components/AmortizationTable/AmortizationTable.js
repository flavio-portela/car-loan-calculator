import React from "react";
import styles from "./AmortizationTable.styles";
import { formatPrice } from "../../utils/prices";

const AmortizationTable = ({ amortizationSchedule }) => (
  <div css={styles}>
    <table>
      <thead>
        <tr>
          <th>Month</th>
          <th>Monthly Payment</th>
          <th>Interest</th>
          <th>Unpaid Balance Reduction</th>
          <th>Unpaid Balance</th>
        </tr>
      </thead>
      <tbody>
        {amortizationSchedule.map(
          ({
            month,
            monthlyPayment,
            interest,
            unpaidBalanceReduction,
            unpaidBalance
          }) => (
            <tr key={month}>
              <td>{month}</td>
              <td>{formatPrice(monthlyPayment)}</td>
              <td>{formatPrice(interest)}</td>
              <td>{formatPrice(unpaidBalanceReduction)}</td>
              <td>{formatPrice(unpaidBalance)}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  </div>
);

export default AmortizationTable;
