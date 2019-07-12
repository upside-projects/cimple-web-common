import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

import Search from "../../Icons/Search"

const Searchbar = ({
  className,
  containerProps,
  disabled,
  error,
  name,
  onBlur,
  onChange,
  placeholder,
  value,
  ...props
}) => {
  return (
    <S.Holder className={className} {...containerProps}>
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
  )
}

export default Searchbar

Searchbar.defaultProps = {
  containerProps: {},
  error: "",
  disabled: false,
  loading: false,
  full: false
}

Searchbar.propTypes = {
  className: PropTypes.string.isRequired,
  containerProps: PropTypes.shape({}),
  error: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  full: PropTypes.bool,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}
