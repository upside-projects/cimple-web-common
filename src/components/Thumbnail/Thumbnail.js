import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Thumbnail = ({ className, size, src, ...props }) => {
  return <S.Thumbnail className={className} size={size} src={src} {...props} />;
};

export default Thumbnail;

Thumbnail.defaultProps = {
  small: false,
  src: 'https://cimple-static-assets.s3-eu-west-1.amazonaws.com/emptyState.png',
};

Thumbnail.propTypes = {
  small: PropTypes.bool,
  src: PropTypes.string,
};
