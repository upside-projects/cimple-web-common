import styled, { css } from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  ${p =>
    p.inline &&
    css`
      flex-direction: row;
      align-items: center;
    `}

  color: ${({ theme }) => theme.colors.greyscale.medium};

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
