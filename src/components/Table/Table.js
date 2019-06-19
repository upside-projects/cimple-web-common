import React from "react"

import {
  Table as StyledTable,
  TableHeader,
  TableBody,
  TableRow,
  TableCell
} from "./styled"

const T = props => <StyledTable {...props} />

T.Header = TableHeader
T.Body = TableBody
T.Row = TableRow
T.Cell = TableCell

export default T
