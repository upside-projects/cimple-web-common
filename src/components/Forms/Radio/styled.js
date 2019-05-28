import styled, { css } from "styled-components";

export const Radio = styled.input`
  display: inline-block;
  margin-right: 0.5rem;
  background-color: red;

  ${({ checked }) =>
    checked &&
    css`
      border: 1px solid red;
    `};
`;

export const Holder = styled.div`
  display: flex;
  flex-direction: row;
`;
