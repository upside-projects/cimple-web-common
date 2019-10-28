import React from 'react';
import PropTypes from 'prop-types';

import Thumbnail from '../../Thumbnail/Thumbnail';
import { UppercaseL } from '../../Typography/Typography';

import * as S from './styled';

const GoodListDetailed = ({ goodImage, goodName, goodSku, unitPrice, goodQuantity, size, ...props }) => {
  return (
    <S.Holder {...props}>
      <S.Flex>
        <Thumbnail src={goodImage} size={size} />
        <S.Wrapper>
          <S.GoodInfo>
            <S.TextQty>{goodQuantity}x</S.TextQty>
            <S.Text>{goodName}</S.Text>
          </S.GoodInfo>
          <UppercaseL color="greyMedium">SKU: {goodSku}</UppercaseL>
        </S.Wrapper>
      </S.Flex>
      <S.Text>{unitPrice}</S.Text>
    </S.Holder>
  );
};

export default GoodListDetailed;

GoodListDetailed.defaultProps = {
  goodImage: 'https://cimple-static-assets.s3-eu-west-1.amazonaws.com/emptyState.png',
  goodName: 'Unnamed product',
  goodSku: 'SKU not available',
  unitPrice: '0',
  goodQuantity: 0,
};

GoodListDetailed.propTypes = {
  goodImage: PropTypes.string,
  goodSku: PropTypes.string,
  goodName: PropTypes.string,
  unitPrice: PropTypes.string,
  goodQuantity: PropTypes.number,
};
