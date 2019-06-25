import React from "react"

import {
  Table as StyledTable,
  TableHeader,
  TableBody,
  TableRow,
  TableCell
} from "./styled"

const Table = props => <StyledTable {...props} />

Table.Header = TableHeader
Table.Body = TableBody
Table.Row = TableRow
Table.Cell = TableCell

export default Table
