import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../Typography/Typography';

import * as S from './styled';

const GoodDisplay = ({ goodName, goodImage, unitPrice, goodCategory, ...props }) => {
  return (
    <S.Holder {...props}>
      <S.ProductThumb goodImage={goodImage} {...props} />
      <S.Flex>
        <S.Tag type={goodCategory}>{goodCategory}</S.Tag>
        <S.Column>
          <Text>{goodName}</Text>
          <Text color="greyMedium">{unitPrice}</Text>
        </S.Column>
      </S.Flex>
    </S.Holder>
  );
};

export default GoodDisplay;

GoodDisplay.defaultProps = {
  goodCategory: 'N/A',
  goodName: 'Unamed product',
  goodImage: '',
  unitPrice: 'N/A',
};

GoodDisplay.propTypes = {
  goodCategory: PropTypes.string,
  goodName: PropTypes.string,
  goodImage: PropTypes.string,
  unitPrice: PropTypes.string,
};
