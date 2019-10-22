import React from 'react';

import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';

import Radio from './Radio';

const store = new Store({
  checked: false,
});

storiesOf('Primitives | Forms / Radios', module).add('Default', () => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <State store={store}>
      {state => (
        <div>
          <Radio checked={state.checked} label="Buyer" onChange={() => store.set({ checked: !store.state.checked })} />
        </div>
      )}
    </State>
  </div>
));
