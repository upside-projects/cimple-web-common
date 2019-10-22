import styled from 'styled-components';
import StyledSpinner from '../Spinner/Spinner';

import Icons from '../Icons/index';

export const AlertHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: ${({ theme }) => theme.radius.xsmall};
  background-color: ${({ theme }) => theme.colors.brand.default}
  color: ${({ theme }) => theme.colors.greyscale.white};

  margin-top: 1rem;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
`;

export const Close = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: white;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  border: none;
`;

export const Spinner = styled(StyledSpinner)`
  margin-right: 0.5rem;
`;

export const Verified = styled(Icons.Verified)`
  margin-right: 0.5rem;
`;
