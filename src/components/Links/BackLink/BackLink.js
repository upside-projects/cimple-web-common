import React from "react";

import Link from "../Link";
import Arrow from "../../Icons/Arrow";

import * as S from "./styled";

const Back = ({ children, to }) => {
  return (
    <Link to={to}>
      <S.Wrapper>
        <Arrow />
        <S.ArrowLink>{children}</S.ArrowLink>
      </S.Wrapper>
    </Link>
  );
};

export default Back;
