import React from 'react';

import * as S from './styled';

const Select = ({ name, label, options, placeholder, containerProps, className }) => {
  return (
    <S.Holder className={className} {...containerProps}>
      <S.Select name={name} label={label}>
        {options ? (
          options.map(optionName => {
            return <option>{optionName}</option>;
          })
        ) : (
          <option disabled selected value>
            {' '}
            {placeholder}{' '}
          </option>
        )}
      </S.Select>
    </S.Holder>
  );
};

export default Select;
