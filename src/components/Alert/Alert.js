import * as React from 'react';
import Icons from '../Icons/index';
import { Text } from '../Typography/Typography';

import * as S from './styled';

const Alert = ({ message, close, noSpinner }) => {
  return (
    <S.AlertHolder>
      {!noSpinner && <S.Spinner />}
      <Text color="white">{message}</Text>
      <S.Close onClick={close}>
        <Icons.Close />
      </S.Close>
    </S.AlertHolder>
  );
};

export default Alert;
