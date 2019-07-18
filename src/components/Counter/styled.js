import styled from "styled-components"

export const CounterHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.greyscale.medium};
  border-radius: ${({ theme }) => theme.radius.small};
  padding: 0.5rem;
`

export const Value = styled.p`
  padding: 0 1rem;
  font-size: 16px;
  line-height: 24px;
`

export const CounterAction = styled.button`
  display: inline-block;
  border: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;

  height: 24px;

  &:focus {
    outline: 0;
  }

  &:active {
    outline: 0;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.greyscale.medium};
  }
`
