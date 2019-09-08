import { css } from "@emotion/core";
import { COLORS } from "./constants";

export default css`
  font-size: 2rem;
  .calculatorWrapper {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    & > * {
      width: 40%;
    }
    @media only screen and (max-width: 900px) {
      & > * {
        width: 100%;
      }
    }
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
