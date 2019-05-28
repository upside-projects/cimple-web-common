import styled, { css } from "styled-components";

export const base = css`
  background-color: ${({ theme }) => theme.colors.brand};
  border: none;
  border-radius: ${({ theme }) => theme.radius.xsmall};
  color: ${({ theme }) => theme.colors.greyscale.white};

  padding: 0.5rem 0.75rem;
`;

export const Button = styled.button`
  ${base}
`;
