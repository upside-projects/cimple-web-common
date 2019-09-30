// @flow
import React from 'react';
import GoodList from '../../Goods/GoodList/GoodList';
import { Text } from '../../Typography/Typography';
import TagSecondary from '../../TagSecondary/TagSecondary';

import * as S from './styled';

const SuggestedPairsCard = ({ goods, similarityPercentage }): React.Element<*> => {
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

  return (
    <S.MatchingSuggested>
      <S.MatchingGoods>
        {goods.map(good => {
          return (
            <S.GoodsRow key={good.id}>
              <GoodList goodImage={good.source.image} goodName={good.name} noSku small />
              <GoodList goodImage={good.source.image} goodName={good.source.name} noSku small />
              <Text>{good.price}</Text>
            </S.GoodsRow>
          );
        })}
      </S.MatchingGoods>
      <TagSecondary value={evaluateSimilarity(similarityPercentage)}>{similarityPercentage}%</TagSecondary>
      <S.MatchingActions>
        <p>up</p>
        <p>down</p>
      </S.MatchingActions>
    </S.MatchingSuggested>
  );
};

export default SuggestedPairsCard;
