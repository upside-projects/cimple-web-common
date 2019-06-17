import React from "react";

import * as S from "./styled";

const Tag = ({ children, ...props }) => {
  return (
    <S.Tag {...props}>
      <p>{children}</p>
    </S.Tag>
  );
};

export default Tag;
