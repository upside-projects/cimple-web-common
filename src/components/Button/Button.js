import React from "react";

import * as S from "./styled";

const Button = ({ children, loading, full }) => {
  return (
    <S.Button full={full} loading={loading}>
      {children}
    </S.Button>
  );
};

export default Button;
