import styled, { css } from 'styled-components';

export const CounterHolder = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.greyscale.light};
  border-radius: ${({ theme }) => theme.radius.small};
  padding: 0.5rem;
`;

export const Value = styled.input`
  font-size: 16px;
  line-height: 24px;
  font-variant-numeric: tabular-nums;

  background-color: none;
  border: none;
  border-radius: none;
  text-align: center;

  width: ${p => `calc(${p.width}px + 50px)`};

  &:focus {
    outline: none;
  }
`;

export const CounterAction = styled.button`
  cursor: pointer;
  background: none;
  background-color: none;
  border: 0;
  display: inline-block;
  text-decoration: none;
  text-align: center;

  margin: 0;
  padding: 0;

  -webkit-tap-highlight-color: transparent;

  -webkit-appearance: none;
  -moz-appearance: none;

  height: 24px;

  &:focus {
    outline: 0;
  }

  &:active {
    color: inherit;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.greyscale.medium};
  }
`;
