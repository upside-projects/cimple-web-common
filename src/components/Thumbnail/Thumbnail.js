import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const Thumbnail = ({ src }) => {
  return <S.Thumbnail src={src} />
}

export default Thumbnail

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired
}
