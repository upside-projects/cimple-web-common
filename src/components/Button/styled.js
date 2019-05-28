import styled, { css } from "styled-components";

export const base = css`
  background-color: ${({ theme }) => theme.colors.brand};
  border: none;
  border-radius: ${({ theme }) => theme.radius.xsmall};
  color: ${({ theme }) => theme.colors.greyscale.white};

  padding: 8px 12px;
`;

export const Button = styled.button`
  ${base}
`;
