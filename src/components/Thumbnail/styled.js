/* eslint-disable import/prefer-default-export */
import styled from "styled-components"

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
`
