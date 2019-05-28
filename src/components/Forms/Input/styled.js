import styled, { css } from "styled-components";

export const base = css`
  font-size: 1rem;
  line-height: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.greyscale.light};
  border-radius: ${({ theme }) => theme.radius.xsmall};
  color: ${({ theme }) => theme.colors.greyscale.black};

  padding: 0.5rem 0.75rem;
  margin-top: 0.5rem;

  ::placeholder {
    color: ${({ theme }) => theme.colors.greyscale.medium};
  }

  :-ms-input-placeholder {
    color: red;
  }

  ::-ms-input-placeholder {
    color: red;
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.greyscale.medium};
  }

  ${p =>
    p.error &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.red};
    `}
`;

export const Input = styled.input`
  ${base}
`;

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
