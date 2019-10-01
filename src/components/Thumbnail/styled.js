/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const Thumbnail = styled.div`
  background-color: ${({ theme }) => theme.colors.greyscale.lighter};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.greyscale.light};
  height: 3rem;
  width: 3rem;
  min-width: 3rem;

  background-image: ${p => `url(${p.src})`};
  background-size: cover;
  background-position: center center;

  ${p =>
    p.size === 'mini' &&
    css`
      height: 1.5rem;
      width: 1.5rem;
      min-width: 1.5rem;
    `}

  ${p =>
    p.size === 'small' &&
    css`
      height: 2.2rem;
      width: 2.2rem;
      min-width: 2.2rem;
    `}

  ${p =>
    p.size === 'large' &&
    css`
      height: 4rem;
      width: 4rem;
      min-width: 4rem;
    `}



`;
