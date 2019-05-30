import React from "react";

import * as S from "./styled";

const Link = ({ link, href, children }) => {
  return <S.Anchor href={href}>{children}</S.Anchor>;
};

export default Link;
