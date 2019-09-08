import { css } from "@emotion/core";
import { COLORS } from '../../constants';

export default css`
  width: 100%;
  padding: 1rem;
  th {
    color: ${COLORS.PRIMARY_2};
  }
  tr {
    color: ${COLORS.PRIMARY_1};
    text-align: center;
  }
`;
