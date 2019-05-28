import styled, { css } from "styled-components";

export const base = css`
  border: 1px solid ${({ theme }) => theme.colors.greyscale.light};
  border-radius: ${({ theme }) => theme.radius.xsmall};
  color: ${({ theme }) => theme.colors.greyscale.black};

  padding: 8px 16px;

  &:focus {
    color: ${({ theme }) => theme.colors.greyscale.black};

    outline: 1px solid ${({ theme }) => theme.colors.greyscale.medium};
  }
`;

export const Input = styled.input`
  ${base}
`;
