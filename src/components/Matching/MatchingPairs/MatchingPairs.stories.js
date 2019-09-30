import React from 'react';

import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';

import MatchingPairs from './MatchingPairs';

const store = new Store({
  current: 1,
});

storiesOf('Matching', module).add('Default', () => (
  <State store={store}>
    {state => (
      <div style={{ width: '80vw' }}>
        <MatchingPairs />
      </div>
    )}
  </State>
));
