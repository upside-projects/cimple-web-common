import React from "react";

import Link from "../Link";
import * as S from "./styled";

import Arrow from "../../Icons/Arrow";

const ArrowLink = ({ to, children, withIcon }) => {
  return (
    <Link to={to}>
      <S.Wrapper>
        <S.ArrowLink>{children}</S.ArrowLink>
        <Arrow />
      </S.Wrapper>
    </Link>
  );
};

export default ArrowLink;
