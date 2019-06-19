import styled from "styled-components"

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`

export const TableHeader = styled.thead`
  text-align: left;
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyscale.lighter};
`

export const TableCell = styled.td`
  padding: 1rem 0rem;
`
