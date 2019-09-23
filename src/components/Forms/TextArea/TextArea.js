import React from 'react';
import Label from '../Label/Label';
import * as S from './styled';

const Textarea = ({
  name,
  onBlur,
  onChange,
  placeholder,
  value,
  error,
  disabled,
  label,
  className,
  containerProps,
}) => {
  return (
    <S.Holder className={className} {...containerProps}>
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
    </S.Holder>
  );
};

export default Textarea;
