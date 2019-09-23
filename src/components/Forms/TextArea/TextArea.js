import React from 'react';

import Label from '../Label/Label';

import * as S from './styled';

const TextArea = ({ name, onBlur, onChange, placeholder, value, error, disabled, label }) => {
  return (
    <Label>
      <S.LabelTitle>{label}</S.LabelTitle>
      <S.TextArea
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        error={error}
        disabled={disabled}
      />
    </Label>
  );
};

export default TextArea;
