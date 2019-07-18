import styled from "styled-components"

export const QuantityHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.greyscale.dark};
  border-radius: ${({ theme }) => theme.radius.small};
  padding: 1rem;
`

export const Value = styled.div`
  padding: 0 1.5rem;
`
