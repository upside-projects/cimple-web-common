import React from "react"
import PropTypes from "prop-types"

import Link from "../Link"
import * as S from "./styled"

import External from "../../Icons/External"

const ExternalLink = ({ children, to }) => {
  return (
    <Link to={to}>
      <S.Wrapper>
        <S.ArrowLink>{children}</S.ArrowLink>
        <External />
      </S.Wrapper>
    </Link>
  )
}

export default ExternalLink

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
}
