import { css } from "@emotion/core";
import { COLORS } from "../../constants";

export default css`

  & > div {
    display: flex;
    justify-content: space-between;
    margin: 3rem 0;
    .formField {
      position: relative;
      flex-wrap: wrap;
      display: flex;
      width: 50%;
      input {
        width: 100%;
      }
      span {
        font-size: 1.5rem;
        color: red;
        margin-top: 0.5rem;
      }
    }
    @media only screen and (max-width: 450px) {
      flex-direction: column;
      .formField{ 
        width: 100%;
      }
    }
  }
  & > div:first-of-type{
    margin-top: 0;
  }
  .error {
    border: 0.3rem solid red;
  }
  input {
    font-size: 1.8rem;
    border: 0.3rem solid ${COLORS.PRIMARY_1};
    padding: 1rem;
  }
  button {
    width: 100%;
    color: white;
    background-color: ${COLORS.PRIMARY_1};
    border: none;
    padding: 1rem 2rem;
    font-size: 2rem;
    &:hover {
      background-color: ${COLORS.SECONDARY_1};
      cursor: pointer;
    }
  }

  button:focus,
  input:focus {
    outline: ${COLORS.SECONDARY_2} solid 0.3rem;
    outline-offset: -0.3rem;
  }
`;
