// @flow
import React from 'react';
import GoodList from '../../Goods/GoodList/GoodList';
import { Text } from '../../Typography/Typography';

import * as S from './styled';

const SuggestedPairsCard = (): React.Element<*> => {
  return (
    <S.MatchingSuggested>
      <S.MatchingRow>
        <GoodList goodName="Good name" noSku small />
        <GoodList goodName="Source name" noSku small />
        <Text>Unit price</Text>
      </S.MatchingRow>
      <S.MatchingRow>
        <GoodList goodName="Good name" noSku small />
        <GoodList goodName="Source name" noSku small />
        <Text>Unit price</Text>
      </S.MatchingRow>
      <
    </S.MatchingSuggested>
  );
};

export default SuggestedPairsCard;
