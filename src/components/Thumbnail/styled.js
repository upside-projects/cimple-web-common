/* eslint-disable import/prefer-default-export */
import styled from "styled-components"

export const Thumbnail = styled.div`
  background-color: ${({ theme }) => theme.colors.greyscale.lighter};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.greyscale.light};
  height: 3.75rem;
  width: 3.75rem;
  min-width: 3.75rem;

  background-image: ${p => `url(${p.src})`};
  background-size: cover;
  background-position: center center;
`
