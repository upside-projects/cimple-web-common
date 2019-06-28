import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const ArrowLink = ({ children, withColor }) => {
  return (
    <S.Wrapper withColor={withColor}>
      <S.ArrowLink withColor={withColor}>{children}</S.ArrowLink>
      <S.ArrowIcon />
    </S.Wrapper>
  )
}

export default ArrowLink

ArrowLink.propTypes = {
  children: PropTypes.node.isRequired,
  withColor: PropTypes.bool.isRequired
}
