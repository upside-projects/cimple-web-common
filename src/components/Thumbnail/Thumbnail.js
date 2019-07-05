import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const Thumbnail = ({ src }) => {
  return <S.Thumbnail src={src} />
}

export default Thumbnail

Thumbnail.defaultProps = {
  src: "https://cimple-static-assets.s3-eu-west-1.amazonaws.com/emptyState.png"
}

Thumbnail.propTypes = {
  src: PropTypes.string
}
