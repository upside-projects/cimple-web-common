import React from 'react';
import PropTypes from 'prop-types';
import Icons from '../Icons';

import { measureTextWidth } from '../../utils/measureText';

import * as S from './styled';

const Counter = ({ value, minValue, maxValue, onChange, onBlur, onFocus, autoWidth }) => {
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    if (!isActive && value < minValue) {
      onChange(minValue);
    }

    if (!isActive && value > maxValue) {
      onChange(maxValue);
    }
  }, [maxValue, minValue, onChange, value, isActive]);

  const increaseVal = () => {
    if (value < maxValue) {
      onChange(value + 1);
    }
  };

  const decreaseVal = () => {
    if (value > minValue) {
      onChange(value - 1);
    }
  };

  const handleOnChange = ({ currentTarget: { value } }) => {
    if (value === '' || !isNaN(value)) {
      return onChange(value ? parseInt(value, 10) : null);
    }
  };

  const handleOnFocus = e => {
    setIsActive(true);
    onFocus(e);
  };

  const handleOnBlur = e => {
    setIsActive(false);
    if (value === '') {
      onChange(minValue);
    }
    onBlur(e);
  };

  return (
    <S.CounterHolder>
      <S.CounterAction type="button" onClick={decreaseVal} disabled={value === minValue}>
        <Icons.Minus />
      </S.CounterAction>
      <S.Value
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        value={value || ''}
        width={autoWidth ? `calc(${measureTextWidth(value)}px + 50px)` : '100%'}
      />
      <S.CounterAction type="button" onClick={increaseVal} disabled={value >= maxValue}>
        <Icons.Plus />
      </S.CounterAction>
    </S.CounterHolder>
  );
};

Counter.defaultProps = {
  minValue: 0,
  maxValue: Number.MAX_SAFE_INTEGER,
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
};

Counter.propTypes = {
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.number,
  autoWidth: PropTypes.bool,
};

export default Counter;
