import React from "react";

import Link from "../Link";
import * as S from "./styled";

import External from "../../Icons/External";

const ExternalLink = ({ to, children, withIcon }) => {
  return (
    <Link to={to}>
      <S.Wrapper>
        <S.ArrowLink>{children}</S.ArrowLink>
        <External />
      </S.Wrapper>
    </Link>
  );
};

export default ExternalLink;
