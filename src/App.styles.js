import { css } from "@emotion/core";

export default css`
  font-size: 2rem;
  padding: 0 20rem;
  .calculatorWrapper {
    display: flex;
    justify-content: space-between;
    .loanForm {
      width: 50%;
    }
    @media (max-width: 689px) {
      flex-direction: column;
      .loanForm{
        width: 100%;
      }
    }
  }
  @media (max-width: 1041px) {
    padding: 0;
  }

  header h1 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 4rem;
  }
`;

export const globalStyles = css`
  html {
    font-size: 62.5%;
    font-family: "Courier New", Courier, monospace;
  }
`;
