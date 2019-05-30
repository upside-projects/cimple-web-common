import styled, { css } from "styled-components";

export const base = css`
  background-color: ${({ theme }) => theme.colors.brand.default};
  border: none;
  border-radius: ${({ theme }) => theme.radius.xsmall};
  color: ${({ theme }) => theme.colors.greyscale.white};
  cursor: pointer;

  padding: 0.5rem 0.75rem;

  transition: ${({ theme }) => theme.transition.ease()};

  &:hover {
    background-color: ${({ theme }) => theme.colors.brand.dark};
  }

  &:active {
    outline: none;
    background-color: ${({ theme }) => theme.colors.brand.dark};
  }

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.brand.dark};
  }

  ${p =>
    p.disabled &&
    css`
      cursor: not-allowed;
    `}
`;

export const Button = styled.button`
  ${base}
`;
