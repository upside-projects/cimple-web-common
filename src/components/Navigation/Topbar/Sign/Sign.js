import React from "react"
import PropTypes from "prop-types"

import Search from "../../../Forms/Search/Search"
import ExternalLink from "../../../Links/ExternalLink/ExternalLink"
import Logo from "../../../Logo/Logo"
import * as S from "./styled"

const TopbarSign = ({ noSearch, placeholder, linkTo, linkName }) => {
  return (
    <S.Holder>
      <Logo />
      {!noSearch && <Search placeholder={placeholder} />}
      <ExternalLink to={linkTo}>{linkName}</ExternalLink>
    </S.Holder>
  )
}

export default TopbarSign

TopbarSign.propTypes = {
  linkTo: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
  noSearch: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired
}
