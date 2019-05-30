import styled, { css } from "styled-components";

import applyColor from "./applyColor";

export const base = css`
  color: ${applyColor};
`;

export const Display = styled.h1`
  ${base}

  font-size: 2.5rem;
  font-weigth: 600;
  line-height: 3rem;
  letter-spacing: 0.24px;
`;

export const Uppercase = styled.p`
  ${base}

  font-size: 0.625rem;
  line-height: 1rem;
  letter-spacing: 0.24px;
  text-transform: uppercase;
`;
