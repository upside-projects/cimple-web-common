import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

import Cart from "../../../Icons/Cart"
import Logo from "../../../Logo/Logo"
import NavLink from "../../../Links/NavLink/NavLink"
import Search from "../../../Forms/Search/Search"

const TopbarMarket = ({ placeholder, userName }) => {
  return (
    <S.Holder>
      <S.Wrapper>
        <Logo />
        <Search placeholder={placeholder} />
      </S.Wrapper>
      <S.Links>
        <NavLink to="http://cena.com">Orders</NavLink>
        <NavLink to="http://cena.com" withIcon={<Cart />}>
          Cart
        </NavLink>
        <NavLink to="http://cena.com">{userName}</NavLink>
      </S.Links>
    </S.Holder>
  )
}

export default TopbarMarket

TopbarMarket.propTypes = {
  placeholder: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired
}
