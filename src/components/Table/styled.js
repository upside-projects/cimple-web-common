import styled from "styled-components"

export const Table = styled.table`
  border-collapse: collapse;
  text-align: left;
  width: 100%;

  th:last-of-type,
  td:last-of-type {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 16px;
  }
`

export const TableHeader = styled.thead`
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyscale.lighter};

  td {
    padding: 0.5rem 0rem;
  }

  @media only screen and (max-width: 500px) {
    td:nth-child(n + 3):not(:nth-last-child(1)) {
      display: none;
    }
  }
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyscale.lighter};

  @media only screen and (max-width: 500px) {
    td:nth-child(n + 3):not(:nth-last-child(1)) {
      display: none;
    }
  }
`

export const TableCell = styled.td`
  padding: 1rem 0rem;
  vertical-align: middle;
`
