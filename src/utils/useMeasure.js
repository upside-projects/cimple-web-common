import React from "react"

export default () => {
  const [rect, setRect] = React.useState(0)

  const ref = React.useCallback(node => {
    setRect(node.getBoundingClientRect())
  }, [])

  return [ref, rect]
}
