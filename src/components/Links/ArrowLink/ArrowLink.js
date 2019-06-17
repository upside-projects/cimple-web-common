import React from "react"
import PropTypes from "prop-types"

import Link from "../Link"
import * as S from "./styled"

import Arrow from "../../Icons/Arrow"

const ArrowLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <S.Wrapper>
        <S.ArrowLink>{children}</S.ArrowLink>
        <Arrow />
      </S.Wrapper>
    </Link>
  )
}

export default ArrowLink

ArrowLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
