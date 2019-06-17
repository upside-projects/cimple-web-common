import React from "react";

import Search from "../../../Forms/Search/Search";
import ExternalLink from "../../../Links/ExternalLink/ExternalLink";
import Logo from "../../../Logo/Logo";
import * as S from "./styled";

const TopbarSign = ({ noSearch }) => {
  return (
    <S.Holder>
      <Logo />
      {!noSearch && <Search placeholder="Search for goods" />}
      <ExternalLink to="https://cimple.uk">Cimple Marketplace</ExternalLink>
    </S.Holder>
  );
};

export default TopbarSign;
