// @flow
import React from 'react';
import GoodList from '../../Goods/GoodList/GoodList';
import { Text } from '../../Typography/Typography';
import TagSecondary from '../../TagSecondary/TagSecondary';
import Icons from '../../Icons/index';

import * as S from './styled';

const ButtonVote = ({ handleClick, children }) => {
  return <S.ButtonVote handleClick={handleClick}>{children}</S.ButtonVote>;
};

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
              <GoodList goodImage={good.image.small} goodName={good.name} noSku small />
              <GoodList goodImage={good.source.image.small} goodName={good.source.name} noSku small />
              <Text>{good.price}</Text>
            </S.GoodsRow>
          );
        })}
      </S.MatchingGoods>
      <TagSecondary value={evaluateSimilarity(similarityPercentage)}>{similarityPercentage}%</TagSecondary>
      <S.MatchingActions>
        <ButtonVote>
          <Icons.ThumbsUp />
        </ButtonVote>
        <ButtonVote>
          <Icons.ThumbsDown />
        </ButtonVote>
      </S.MatchingActions>
    </S.MatchingSuggested>
  );
};

export default SuggestedPairsCard;
