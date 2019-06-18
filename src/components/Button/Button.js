import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

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
  )
}

export default Button

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  full: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}
