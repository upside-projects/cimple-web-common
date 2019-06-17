import React from "react";

import Link from "../Link";
import * as S from "./styled";

const NavLink = ({ to, children, withIcon }) => {
  return (
    <Link to={to}>
      <S.Wrapper withIcon={withIcon}>
        <S.NavLink>{children}</S.NavLink>
        {withIcon && withIcon}
      </S.Wrapper>
    </Link>
  );
};

export default NavLink;
