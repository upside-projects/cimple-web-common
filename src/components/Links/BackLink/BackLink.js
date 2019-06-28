import React from "react"
import PropTypes from "prop-types"

import Arrow from "../../Icons/Arrow"

import * as S from "./styled"

const Back = ({ children }) => {
  return (
    <S.Wrapper>
      <Arrow />
      <S.ArrowLink>{children}</S.ArrowLink>
    </S.Wrapper>
  )
}

export default Back

Back.propTypes = {
  children: PropTypes.node.isRequired
}
