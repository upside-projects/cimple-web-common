import * as React from 'react';
import Icons from '../Icons/index';
import { Text } from '../Typography/Typography';

import * as S from './styled';

const Alert = ({ message, close, noSpinner, options }) => {
  const map = {
    success: <S.Verified />,
    importing: <S.Spinner />,
    default: '',
  };

  const determineFeedbackType = options => {
    if (options && options.type) {
      return map[options.type] || map.default;
    }

    return map.default;
  };

  return (
    <S.AlertHolder>
      {determineFeedbackType(options)}
      <Text color="white">{message}</Text>
      <S.Close onClick={close}>
        <Icons.Close />
      </S.Close>
    </S.AlertHolder>
  );
};

export default Alert;
