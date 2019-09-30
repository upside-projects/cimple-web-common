import React from 'react';

import * as S from './styled';

const TagSecondary = ({ value, children }) => {
  return <S.Tag value={value}>{children}</S.Tag>;
};

export default TagSecondary;
