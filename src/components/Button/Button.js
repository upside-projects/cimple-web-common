import React from "react";

import * as S from "./styled";

const Button = ({ className, disabled, children, loading, full }) => {
  return (
    <S.Button
      full={full}
      loading={loading}
      className={className}
      disabled={disabled}
    >
      {children}
    </S.Button>
  );
};

export default Button;
