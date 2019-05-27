import styled, { css } from "styled-components";

export const base = css`
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.radius.black};
`;

export const Input = styled.input`
  ${Input}
`;
