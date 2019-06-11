import React from "react";

import * as S from "./styled";

const Button = ({ children, full }) => {
  return <S.Button full={full}>{children}</S.Button>;
};

export default Button;
