import React from 'react';
import PropTypes from 'prop-types';

import Label from '../Label/Label';
import * as S from './styled';

const Checkbox = ({ className, label, name, checked, onChange, ...props }) => {
  return (
    <S.Holder className={className}>
      <Label inline>
        <S.Check checked={checked} />
        <S.Checkbox id={name} name={name} type="checkbox" checked={checked} onChange={onChange} />
        <S.Label>{label}</S.Label>
      </Label>
    </S.Holder>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
