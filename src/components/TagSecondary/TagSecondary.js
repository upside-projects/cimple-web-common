import React from 'react';

import * as S from './styled';

const TagSecondary = ({ value, children }) => {
  const evaluateSimilarity = similarityPercentage => {
    if (similarityPercentage >= 70) {
      return 'high';
    }
    if (similarityPercentage < 70 && similarityPercentage >= 40) {
      return 'medium';
    }
    if (similarityPercentage < 40) {
      return 'low';
    }
  };

  return <S.Tag value={evaluateSimilarity(value)}>{children}%</S.Tag>;
};

export default TagSecondary;
