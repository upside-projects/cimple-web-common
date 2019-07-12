import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const Button = ({
  className,
  children,
  disabled,
  isLoading,
  full,
  onClick,
  ...props
}) => {
  return (
    <S.Button
      full={full}
      isLoading={isLoading}
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
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  full: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  isLoading: false,
  full: false,
  disabled: false
}
