import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Select = ({
  value,
  onChange,
  forwardedRef,
  label,
  name,
  containerProps,
  error,
  placeholder,
  options,
  ...props
}) => {
  const selectProps = name ? { ...props, id: name } : props;
  return (
    <S.Holder {...containerProps} name={name} label={label} error={error}>
      {label && <S.SelectLabel>{label}</S.SelectLabel>}
      <S.IconHolder>
        <S.Select {...selectProps} value={value} onChange={onChange} ref={forwardedRef} error={error} isEmpty={!value}>
          {placeholder && (
            <option disabled value="">
              {placeholder}
            </option>
          )}
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </S.Select>
        <S.Icon />
      </S.IconHolder>
    </S.Holder>
  );
};

Select.defaultProps = {
  value: '',
  onChange: () => {},
  forwardedRef: () => {},
  label: '',
  name: '',
  containerProps: {},
  error: '',
  placeholder: '',
  options: [],
};

Select.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  forwardedRef: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  containerProps: PropTypes.shape({}),
  error: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ),
};

export default Select;
