import styled, { css } from "styled-components";

export const base = css`
  background-color: ${({ theme }) => theme.colors.brand};
`;

export const Button = styled.button`
  ${base}
`;
