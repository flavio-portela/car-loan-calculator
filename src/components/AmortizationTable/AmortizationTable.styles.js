import { css } from "@emotion/core";
import { COLORS } from "../../constants";

export default css`
  overflow: auto;
  padding: 1rem;
  table{
    width: 100%;
  }
  th {
    color: ${COLORS.PRIMARY_2};
  }
  tr {
    color: ${COLORS.PRIMARY_1};
    text-align: center;
  }
`;
