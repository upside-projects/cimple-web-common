import React from 'react';
import PropTypes from 'prop-types';
import Icons from '../Icons';

import { measureTextWidth } from '../../utils/measureText';

import * as S from './styled';

const Counter = ({ value, minValue, maxValue, onChange, onBlur, onFocus }) => {
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    if (!isActive && Number(value) < minValue) {
      onChange(minValue.toString());
    }

    if (!isActive && Number(value) > maxValue) {
      onChange(maxValue.toString());
    }
  }, [maxValue, minValue, onChange, value, isActive]);

  const increaseVal = () => {
    if (value < maxValue) {
      onChange((Number(value) + 1).toString());
    }
  };

  const decreaseVal = () => {
    if (value > minValue) {
      onChange((Number(value) - 1).toString());
    }
  };

  const handleOnChange = ({ currentTarget: { value } }) => {
    if (value === '' || !isNaN(value)) {
      return onChange(value.toString());
    }
  };

  const handleOnFocus = e => {
    setIsActive(true);
    onFocus(e);
  };

  const handleOnBlur = e => {
    setIsActive(false);
    if (value === '') {
      onChange(minValue.toString());
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
        value={value}
        width={measureTextWidth(value)}
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
  value: PropTypes.string.isRequired,
};

export default Counter;
