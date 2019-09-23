import React from 'react';

import * as S from './styled';

const Select = ({ name, label, options, placeholder }) => {
  return (
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
  );
};

export default Select;
