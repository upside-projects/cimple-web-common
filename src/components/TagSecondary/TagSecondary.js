import React from 'react';
import { Text } from '../Typography/Typography';
import * as S from './styled';

const TagSecondary = ({ value, children }) => {
  return (
    <S.Tag value={value}>
      <Text>{children}</Text>
    </S.Tag>
  );
};

export default TagSecondary;
