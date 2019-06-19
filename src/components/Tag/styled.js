/* eslint-disable import/prefer-default-export */
import styled from "styled-components"

const getBgColor = props => {
  const types = {
    canceled: props.theme.colors.danger.light,
    completed: props.theme.colors.green.light,
    refunded: props.theme.colors.yellow.light
  }

  return types[props.status] || props.theme.colors.greyscale.light
}

const getColor = props => {
  const types = {
    canceled: props.theme.colors.danger.default,
    completed: props.theme.colors.green.default,
    refunded: props.theme.colors.yellow.default
  }

  return types[props.status] || props.theme.colors.greyscale.dark
}

export const Tag = styled.span`
  display: block;
  border-radius: ${({ theme }) => theme.radius.xsmall};
  color: ${getColor};
  background-color: ${getBgColor};

  padding: 4px 8px;
`
