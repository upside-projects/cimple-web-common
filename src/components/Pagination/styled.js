import styled, { css } from "styled-components"

export const PageHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Holder = styled.div`
  position: relative;
`

export const PageButton = styled.div`
  cursor: pointer;
  padding: 0.8rem;

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

  &:disabled {
    color: ${({ theme }) => theme.colors.greyscale.light};
  }

  &:active {
    color: ${({ theme }) => theme.colors.brand.dark};
  }
`
