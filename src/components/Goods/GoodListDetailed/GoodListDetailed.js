import React from 'react';
import PropTypes from 'prop-types';

import Thumbnail from '../../Thumbnail/Thumbnail';
import { UppercaseL } from '../../Typography/Typography';

import * as S from './styled';

const GoodListDetailed = ({ goodImage, goodName, goodSku, unitPrice, goodQuantity, ...props }) => {
  return (
    <S.Holder {...props}>
      <Thumbnail src={goodImage} />
      <S.Wrapper>
        <S.Flex>
          <S.Flex>
            <S.TextQty>{goodQuantity}x</S.TextQty>
            <S.Text>{goodName}</S.Text>
          </S.Flex>
          <S.Text>{unitPrice}</S.Text>
        </S.Flex>
        <UppercaseL color="greyMedium">SKU: {goodSku}</UppercaseL>
      </S.Wrapper>
    </S.Holder>
  );
};

export default GoodListDetailed;

GoodListDetailed.defaultProps = {
  currency: '£',
  goodImage: 'https://cimple-static-assets.s3-eu-west-1.amazonaws.com/emptyState.png',
  goodName: 'Unnamed product',
  goodSku: 'SKU not available',
  unitPrice: '0',
  goodQuantity: 0,
};

GoodListDetailed.propTypes = {
  currency: PropTypes.string,
  goodImage: PropTypes.string,
  goodSku: PropTypes.string,
  goodName: PropTypes.string,
  unitPrice: PropTypes.string,
  goodQuantity: PropTypes.number,
};
