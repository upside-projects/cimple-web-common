import styled, { css } from 'styled-components';

import applyColor from './applyColor';

export const base = css`
  color: ${applyColor};
  font-weight: 400;
`;

export const title = css`
  font-weight: 700;
`;

export const HeadingL = styled.h1`
  ${base}
  ${title} 

  font-size: 2.5rem;
  line-height: 3rem;
  letter-spacing: -0.8px;
`;

export const HeadingM = styled.h2`
  ${base}
  ${title}

  font-size: 2rem;
  line-height: 2.5rem;
  letter-spacing: -0.6px;

  @media only screen and (max-width: 500px) {
    font-size: 1.5rem;
    line-height: 1.5rem;
    letter-spacing: -0.48px;
  }
`;

export const HeadingS = styled.h3`
  ${base}
  ${title}

  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: -0.4px;
`;

export const Text = styled.p`
  ${base}

  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.32px;

  ${p =>
    p.bold &&
    css`
      font-weight: 600;
    `}
`;

export const UppercaseL = styled.p`
  ${base}

  font-size: 0.75rem;
  line-height: 1.25rem;
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

export const Uppercase = styled.p`
  ${base}

  font-size: 0.625rem;
  line-height: 1rem;
  letter-spacing: 0.24px;
  text-transform: uppercase;
`;
