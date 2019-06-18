import React from "react"
import PropTypes from "prop-types"

import Link from "../Link"
import * as S from "./styled"

const NavLink = ({ to, children, withIcon }) => {
  return (
    <Link to={to}>
      <S.Wrapper withIcon={withIcon}>
        <S.NavLink>{children}</S.NavLink>
        {withIcon && withIcon}
      </S.Wrapper>
    </Link>
  )
}

export default NavLink

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  withIcon: PropTypes.string.isRequired
}
