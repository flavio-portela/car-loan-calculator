export function calculateMonthlyPayment({ principal, duration, interestRate }) {
  const monthlyInterest = interestRate / 12 / 100;
  return (
    principal *
    ((monthlyInterest * Math.pow(1 + monthlyInterest, duration)) /
      (Math.pow(1 + monthlyInterest, duration) - 1))
  );
}

export function calculateLoan(params){
  const { duration, principal } = params;
  const monthlyPayment = calculateMonthlyPayment(params)
  return {
    monthlyPayment,
    totalInterests: monthlyPayment * duration - principal
  };
}