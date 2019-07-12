import styled, { css } from "styled-components"

export const PageHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Holder = styled.div`
  position: relative;
`

export const PageButton = styled.button`
  cursor: pointer;
  padding: 0.8rem;
  font-variant-numeric: tabular-nums;
  user-select: none;

  border: 0;
  border-radius: 0.25rem;
  background: none;
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;

  ${p =>
    p.active &&
    css`
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 10%;
        height: 1px;
        width: 80%;
        background-color: ${({ theme }) => theme.colors.brand.default};
      }
    `}

  ${p =>
    p.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.2;
    `}

  &:focus {
    outline: none;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.greyscale.light};
  }

  &:active {
    outline: none;
    color: ${({ theme }) => theme.colors.brand.dark};
  }
`
