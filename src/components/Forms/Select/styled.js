import styled, { css } from 'styled-components';

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
      color: ${({ theme }) => theme.colors.danger.default};

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
`;

export const Option = styled.option``;

export const Select = styled.select`
  ${base}
`;
