import React from "react"
import PropTypes from "prop-types"

import Link from "../Link"
import * as S from "./styled"

const ArrowLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <S.ArrowLink>{children}</S.ArrowLink>
      <S.ArrowIcon />
    </Link>
  )
}

export default ArrowLink

ArrowLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
