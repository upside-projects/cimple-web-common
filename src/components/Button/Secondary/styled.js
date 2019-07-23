import styled, { css } from "styled-components"

import { rotate } from "../../../utils/rotate"

export const base = css`
  position: relative;

  background-color: ${({ theme }) => theme.colors.greyscale.white};
  border: 1px solid ${({ theme }) => theme.colors.brand.default}; 
  border-radius: ${({ theme }) => theme.radius.xsmall};
  color: ${({ theme }) => theme.colors.brand.default};
  cursor: pointer;

  padding: 0.5rem 0.75rem;

  transition: ${({ theme }) => theme.transition.ease()};
  

  &:hover {
    background-color: ${({ theme }) => theme.colors.brand.default};
    color: ${({ theme }) => theme.colors.greyscale.white};
  }

  &:active {
    outline: none;
    background-color: ${({ theme }) => theme.colors.brand.dark};
    color: ${({ theme }) => theme.colors.greyscale.white};
  }

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.brand.dark};
    color: ${({ theme }) => theme.colors.greyscale.white};
  }

  ${p =>
    p.disabled &&
    css`
      cursor: not-allowed;
      background-color: ${({ theme }) => theme.colors.greyscale.white};

      &:hover {
        background-color: ${({ theme }) => theme.colors.greyscale.white};
        color: ${({ theme }) => theme.colors.brand.light};
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
        padding-right: 40px;

        &:hover {
          color: ${({ theme }) => theme.colors.brand.default};
          background-color: ${({ theme }) => theme.colors.greyscale.white};
        }

        &:active {
          color: ${({ theme }) => theme.colors.brand.default};
          background-color: ${({ theme }) => theme.colors.greyscale.white};
        }

        &:focus {
          color: ${({ theme }) => theme.colors.brand.default};
          background-color: ${({ theme }) => theme.colors.greyscale.white};
        }

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
          border-top: 2px solid ${({ theme }) => theme.colors.brand.default};
          border-right: 2px solid ${({ theme }) => theme.colors.brand.default};
          border-bottom: 2px solid
            ${({ theme }) => theme.colors.brand.default};
          border-left: 2px solid transparent;

          animation: ${rotate} 2s linear infinite;
      `};
`

export const Button = styled.button`
  ${base}
`
