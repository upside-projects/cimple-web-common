/* eslint-disable import/prefer-default-export */
import styled from "styled-components"

export const Thumbnail = styled.div`
  background-color: ${({ theme }) => theme.colors.greyscale.lighter};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.greyscale.light};
  height: 60px;
  width: 60px;

  background-image: ${p => `url(${p.src})`};
  background-size: cover;
`
