import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Tag = ({ children, ...props }) => {
  return <S.Tag {...props}>{children}%</S.Tag>;
};

export default Tag;

Tag.propTypes = {
  children: PropTypes.node.isRequired,
};
