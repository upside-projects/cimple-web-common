import styled, { css } from "styled-components";

export const base = css`
  background-color: ${({ theme }) => theme.colors.brand};
  border: none;
  border-radius: ${({ theme }) => theme.radius.xsmall};
  color: ${({ theme }) => theme.colors.greyscale.white};
  cursor: pointer;

  padding: 0.5rem 0.75rem;

  transition: ${({ theme }) => theme.transition.ease()};

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkbrand};
  }

  &:active {
    outline: none;
    background-color: ${({ theme }) => theme.colors.darkbrand};
  }

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.darkbrand};
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
