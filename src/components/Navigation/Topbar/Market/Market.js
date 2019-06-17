import React from "react";

import * as S from "./styled";

import Cart from "../../../Icons/Cart";
import Logo from "../../../Logo/Logo";
import NavLink from "../../../Links/NavLink/NavLink";
import Search from "../../../Forms/Search/Search";

const TopbarMarket = () => {
  return (
    <S.Holder>
      <S.Wrapper>
        <Logo />
        <Search placeholder="Search for goods" />
      </S.Wrapper>
      <S.Links>
        <NavLink to="http://cena.com">Orders</NavLink>
        <NavLink to="http://cena.com" withIcon={<Cart />}>
          Cart
        </NavLink>
        <NavLink to="http://cena.com">Mário Rodrigues</NavLink>
      </S.Links>
    </S.Holder>
  );
};

export default TopbarMarket;
