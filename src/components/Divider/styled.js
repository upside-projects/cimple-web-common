/* eslint-disable import/prefer-default-export */
import styled from "styled-components"

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: ${({ theme }) => theme.colors.greyscale.light}
  width: 100%;
`
