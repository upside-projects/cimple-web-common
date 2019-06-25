import styled, { css } from "styled-components"
import { Uppercase as StyledUppercase } from "../../Typography/Typography"

export const base = css`
  font-size: 1rem;
  line-height: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.greyscale.light};
  border-radius: ${({ theme }) => theme.radius.xsmall};
  color: ${({ theme }) => theme.colors.greyscale.black};

  padding: 0.5rem 0.75rem;

  transition: ${({ theme }) => theme.transition.ease()};

  ::placeholder {
    color: ${({ theme }) => theme.colors.greyscale.medium};
  }

  :-ms-input-placeholder {
    color: red;
  }

  ::-ms-input-placeholder {
    color: red;
  }

  &:hover {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.greyscale.medium};
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.brand.default};
  }
${p =>
  p.label &&
  css`
    margin-top: 0.5rem;
  `}

  ${p =>
    p.error &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.danger.default};

      &:hover {
        outline: none;
        border: 1px solid ${({ theme }) => theme.colors.danger.dark};
      }

      &:focus {
        outline: none;
        border: 1px solid ${({ theme }) => theme.colors.danger.dark};
      }
    `}

  ${p =>
    p.disabled &&
    css`
      cursor: not-allowed;
    `}
`

export const Input = styled.input`
  ${base}
`

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 320px;

  @media only screen and (max-width: 375px) {
    min-width: 288px;
  }
`

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Uppercase = styled(StyledUppercase)`
  &:hover {
    color: ${({ theme }) => theme.colors.brand.default};
    transition: ${({ theme }) => theme.transition.ease()};

    cursor: pointer;
  }
`
