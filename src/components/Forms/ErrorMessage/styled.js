import styled, { css } from "styled-components";

import { Uppercase } from "../../Typography/Typography";

const ErrorMessage = styled(Uppercase)`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.greyscale.light};

  margin-top: 0.5rem;

  ${p =>
    p.error &&
    css`
      color: ${({ theme }) => theme.colors.error.default};
    `}
`;

export default ErrorMessage;
