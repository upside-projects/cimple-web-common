import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const NavLink = ({ children, withIcon }) => {
  return (
    <S.Wrapper withIcon={withIcon}>
      <S.NavLink>{children}</S.NavLink>
      {withIcon && withIcon}
    </S.Wrapper>
  )
}

export default NavLink

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  withIcon: PropTypes.string.isRequired
}
