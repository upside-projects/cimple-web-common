import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

import External from "../../Icons/External"

const ExternalLink = ({ children }) => {
  return (
    <S.Wrapper>
      <S.ArrowLink>{children}</S.ArrowLink>
      <External />
    </S.Wrapper>
  )
}

export default ExternalLink

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired
}
