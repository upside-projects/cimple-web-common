import React from "react";

import * as S from "./styled";

const Button = ({ className, children, loading, full }) => {
  return (
    <S.Button full={full} loading={loading} className={className}>
      {children}
    </S.Button>
  );
};

export default Button;
