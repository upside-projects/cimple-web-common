import styled, { css } from "styled-components";

export const Helper = styled.p`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.greyscale.light};

  ${p =>
    p.error &&
    css`
      color: ${({ theme }) => theme.colors.red};
    `}
`;
