import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

import Search from "../../Icons/Search"

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
  )
}

export default Searchbar

Searchbar.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  error: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  full: PropTypes.bool.isRequired,
  helper: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}
