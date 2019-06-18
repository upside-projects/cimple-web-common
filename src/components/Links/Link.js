import React from "react"
import PropTypes from "prop-types"

const Link = ({ navigateWith, to, children }) => {
  const internal = /^\/(?!\/)/.test(to)
  const external = /^http/.test(to)

  if (internal) {
    return navigateWith(to)
  }

  if (external) {
    return <a href={to}>{children}</a>
  }

  return <a href={to}>{children}</a>
}

export default Link

Link.defaultProps = { navigateWith: () => {} }

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  navigateWith: PropTypes.func
}
