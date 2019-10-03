import React from 'react';
import PropTypes from 'prop-types';

import Thumbnail from '../../Thumbnail/Thumbnail';
import { UppercaseL } from '../../Typography/Typography';

import * as S from './styled';

const GoodList = ({ className, goodName, goodImage, goodSku, noSku, size, ...props }) => {
  return (
    <S.Holder className={className} {...props}>
      <Thumbnail size={size} src={goodImage} />
      <S.Wrapper>
        <S.Text>{goodName}</S.Text>
        {!noSku && <UppercaseL color="greyMedium">SKU: {goodSku}</UppercaseL>}
      </S.Wrapper>
    </S.Holder>
  );
};

export default GoodList;

GoodList.defaultProps = {
  id: 'SKU not available',
  name: 'Unnamed product',
  src: 'https://cimple-static-assets.s3-eu-west-1.amazonaws.com/emptyState.png',
};

GoodList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
};
