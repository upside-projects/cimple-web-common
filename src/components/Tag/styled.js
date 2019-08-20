/* eslint-disable import/prefer-default-export */
import styled, { css } from "styled-components"

const getBgColor = props => {
  const types = {
    canceled: props.theme.colors.danger.default,
    completed: props.theme.colors.green.default,
    refunded: props.theme.colors.yellow.default,
    ongoing: props.theme.colors.blue.default
  }

  return types[props.status] || props.theme.colors.greyscale.light
}

const getColor = props => {
  const types = {
    canceled: props.theme.colors.greyscale.white,
    completed: props.theme.colors.greyscale.white,
    refunded: props.theme.colors.greyscale.white,
    ongoing: props.theme.colors.greyscale.white
  }

  return types[props.status] || props.theme.colors.greyscale.dark
}

export const Tag = styled.span`
  background-color: ${getBgColor};
  border-radius: ${({ theme }) => theme.radius.xsmall};
  color: ${getColor};
  display: inline-block;

  text-transform: uppercase;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;

  padding: 4px 8px;

  ${p =>
    p.brand &&
    css`
      background-color: ${({ theme }) => theme.colors.brand.default};
      color: ${({ theme }) => theme.colors.greyscale.white};
    `}
`
