// @flow
import React from 'react';
import GoodList from '../../Goods/GoodList/GoodList';
import { Text } from '../../Typography/Typography';
import TagSecondary from '../../TagSecondary/TagSecondary';
import Icons from '../../Icons/index';

import * as S from './styled';

const ButtonVote = ({ isActive, handleClick, children }) => {
  return (
    <S.ButtonVote isActive={isActive} handleClick={handleClick}>
      {children}
    </S.ButtonVote>
  );
};

const MatchingPairs = ({ className, goods, similarityPercentage, isMatched, ...props }) => {
  return (
    <S.MatchingSuggested className={className} {...props}>
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
      <TagSecondary value={similarityPercentage}>{similarityPercentage}%</TagSecondary>
      <S.MatchingActions>
        <ButtonVote isActive={isMatched === 'positive'}>
          <Icons.ThumbsUp />
        </ButtonVote>
        <ButtonVote isActive={isMatched === 'negative'}>
          <Icons.ThumbsDown />
        </ButtonVote>
      </S.MatchingActions>
    </S.MatchingSuggested>
  );
};

export default MatchingPairs;
