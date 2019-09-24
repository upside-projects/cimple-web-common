import styled, { css } from 'styled-components';
import { Uppercase } from '../../Typography/Typography';
import Icons from '../../Icons/index';

export const base = css`
  font-size: 1rem;
  line-height: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.greyscale.light};
  border-radius: ${({ theme }) => theme.radius.xsmall};
  background-color: ${({ theme }) => theme.colors.greyscale.white}
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
`;

export const Select = styled.select`
  ${base}
  -webkit-appearance: none;
  width: 100%;
`;

export const IconHolder = styled.div`
  position: relative;
`;

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 320px;

  @media only screen and (max-width: 375px) {
    min-width: 288px;
  }
`;

export const SelectLabel = styled(Uppercase)`
  margin-bottom: 0.25rem;
`;

export const Icon = styled(Icons.CaretDown)`
  position: absolute;
  top: 0.6rem;
  right: 1rem;
`;
