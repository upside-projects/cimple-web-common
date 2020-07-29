import React from 'react';
import PropTypes from 'prop-types';

import { UppercaseL } from '../../Typography/Typography';

import * as S from './styled';

const GoodListDetailed = ({ goodImage, goodName, goodSku, unitPrice, goodQuantity, size, ...props }) => {
  return (
    <S.Holder {...props}>
      <S.GoodThumbnail src={goodImage} size={size} />
      <S.GoodInfo >
        <S.Text>{goodQuantity}x {goodName}</S.Text>
        <UppercaseL color="greyMedium">SKU: {goodSku}</UppercaseL>
      </S.GoodInfo>
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
