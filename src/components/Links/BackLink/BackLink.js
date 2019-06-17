import React from "react"
import PropTypes from "prop-types"

import Link from "../Link"
import Arrow from "../../Icons/Arrow"

import * as S from "./styled"

const Back = ({ children, to }) => {
  return (
    <Link to={to}>
      <S.Wrapper>
        <Arrow />
        <S.ArrowLink>{children}</S.ArrowLink>
      </S.Wrapper>
    </Link>
  )
}

export default Back

Back.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
}
