import React from "react";

import * as S from "./styled";

const Button = ({
  className,
  children,
  disabled,
  loading,
  full,
  onClick,
  ...props
}) => {
  return (
    <S.Button
      full={full}
      loading={loading}
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </S.Button>
  );
};

export default Button;
