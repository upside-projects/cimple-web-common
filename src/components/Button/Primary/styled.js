import styled, { css } from "styled-components"

import { rotate } from "../../../utils/rotate"

export const base = css`
  position: relative;

  background-color:${({ theme }) => theme.colors.brand.default};
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
      background-color: ${({ theme }) => theme.colors.brand.light};
      cursor: not-allowed;

      &:hover {
        background-color: ${({ theme }) => theme.colors.brand.light};
      }
    `}


  ${p =>
    p.danger &&
    css`
      background-color: ${({ theme }) => theme.colors.danger.default};

      &:hover {
        background-color: ${({ theme }) => theme.colors.danger.dark};
      }

      &:active {
        outline: none;
        background-color: ${({ theme }) => theme.colors.danger.dark};
      }

      &:focus {
        outline: none;
        background-color: ${({ theme }) => theme.colors.danger.dark};
      }
    `}

  ${p =>
    p.full &&
    css`
      width: 100%;
    `}

    ${p =>
      p.isLoading &&
      css`
        background-color: ${({ theme }) => theme.colors.brand.light};
        padding-right: 40px;

        &:after {
          content: "";
          display: block;

          position: absolute;
          top: 50%;
          margin-top: -8px;
          right: 16px;
          opacity: 0.5;

          width: 16px;
          height: 16px;

          border-radius: 10px;
          border-top: 2px solid ${({ theme }) => theme.colors.greyscale.white};
          border-right: 2px solid ${({ theme }) =>
            theme.colors.greyscale.white};
          border-bottom: 2px solid
            ${({ theme }) => theme.colors.greyscale.white};
          border-left: 2px solid transparent;

          animation: ${rotate} 2s linear infinite;
      `};
`

export const Button = styled.button`
  ${base}
`
