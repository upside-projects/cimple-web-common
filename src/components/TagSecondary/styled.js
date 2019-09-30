/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

const getColor = props => {
  const types = {
    high: props.theme.colors.green.default,
    medium: props.theme.colors.yellow.default,
    low: props.theme.colors.danger.default,
  };

  return types[props.value] || props.theme.colors.greyscale.light;
};

export const Tag = styled.span`
  border-radius: ${({ theme }) => theme.radius.small};
  border: 1px solid ${getColor};
  color: ${getColor};
  display: inline-table;

  padding: 1rem;
`;
