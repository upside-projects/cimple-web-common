import styled, { css } from "styled-components"

export const Radio = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;

  background-color: ${({ theme }) => theme.colors.greyscale.white};
  border: 1px solid ${({ theme }) => theme.colors.greyscale.medium};
  border-radius: ${({ theme }) => theme.radius.round};

  transition: all ${({ theme }) => theme.transition.ease()};

  ${p =>
    p.checked &&
    css`
      background-color: ${({ theme }) => theme.colors.white};

      &:after {
        content: "";
        position: absolute;
        height: 8px;
        width: 8px;
        background-color: ${({ theme }) => theme.colors.brand.default};
        border-radius: ${({ theme }) => theme.radius.round};

        z-index: 2;
        top: 3px;
        left: 3px;
      }
    `}
`

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

export const Label = styled.span`
  margin-left: 1.5rem;
  display: inline-block;
  vertical-align: bottom;
  line-height: 1;
`

export const Holder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: relative;
`
