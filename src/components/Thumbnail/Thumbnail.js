import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const Thumbnail = ({ small, src }) => {
  return <S.Thumbnail small={small} src={src} />;
};

export default Thumbnail;

Thumbnail.defaultProps = {
  small: false,
  src: "https://cimple-static-assets.s3-eu-west-1.amazonaws.com/emptyState.png"
};

Thumbnail.propTypes = {
  small: PropTypes.bool,
  src: PropTypes.string
};
