import styled, { css } from "styled-components";

import applyColor from "./applyColor";

export const base = css`
  color: ${applyColor};
`;

export const title = css`
  font-weigth: 700;
`;

export const HeadingL = styled.h1`
  ${base}
  ${title} 

  font-size: 2.5rem;
  font-weigth: 600;
  line-height: 3rem;
  letter-spacing: 0.24px;
`;

export const HeadingM = styled.h2`
  ${base}
  ${title}

  font-size: 2rem;
  line-height: 2.5rem;
  letter-spacing: 0.24px;
`;

export const HeadingS = styled.h3`
  ${base}
  ${title}

  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: 0.24px;
`;

export const Text = styled.p`
  ${base}

  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.24px;
`;

export const UppercaseL = styled.p`
  ${base}

  font-size: 0.75rem;
  line-height: 1.25rem;
  letter-spacing: 0.24px;
  text-transform: uppercase;
`;

export const Uppercase = styled.p`
  ${base}

  font-size: 0.625rem;
  line-height: 1rem;
  letter-spacing: 0.24px;
  text-transform: uppercase;
`;
