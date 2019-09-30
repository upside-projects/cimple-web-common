// @flow
import React from 'react';
import GoodList from '../../Goods/GoodList/GoodList';
import { Text } from '../../Typography/Typography';
import TagSecondary from '../../TagSecondary/TagSecondary';

import * as S from './styled';

const SuggestedPairsCard = ({ compatibility }): React.Element<*> => {
  return (
    <S.MatchingSuggested>
      <S.MatchingGoods>
        <S.GoodsRow>
          <GoodList goodName="Good name" noSku small />
          <GoodList goodName="Source name" noSku small />
          <Text>Unit price</Text>
        </S.GoodsRow>
        <S.GoodsRow>
          <GoodList goodName="Good name" noSku small />
          <GoodList goodName="Source name" noSku small />
          <Text>Unit price</Text>
        </S.GoodsRow>
      </S.MatchingGoods>
      <TagSecondary value="high">value</TagSecondary>
      <S.MatchingActions>
        <p>up</p>
        <p>down</p>
      </S.MatchingActions>
    </S.MatchingSuggested>
  );
};

export default SuggestedPairsCard;
