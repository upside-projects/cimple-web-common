import React from "react"
import PropTypes from "prop-types"

const Link = ({ renderInternalLink, ...props }) => {
  const internal = /^\/(?!\/)/.test(props.to)
  const external = /^http/.test(props.to)

  if (internal) {
    return renderInternalLink(props)
  }

  if (external) {
    return <a href={props.to}>{props.children}</a>
  }

  return <a href={props.to}>{props.children}</a>
}

export default Link

Link.defaultProps = { renderInternalLink: () => {} }

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  renderInternalLink: PropTypes.func
}
