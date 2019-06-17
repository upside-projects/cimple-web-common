import React from "react";

import * as S from "./styled";

import Search from "../../Icons/Search";

const Searchbar = ({
  className,
  disabled,
  error,
  helper,
  href,
  label,
  link,
  name,
  onBlur,
  onChange,
  placeholder,
  value,
  ...props
}) => {
  return (
    <S.Holder className={className} {...props}>
      <S.Input
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        error={error}
        disabled={disabled}
        {...props}
      />
      <Search />
    </S.Holder>
  );
};

export default Searchbar;
