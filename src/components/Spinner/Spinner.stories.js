import React from 'react';

import { storiesOf } from '@storybook/react';

import Spinner from './Spinner';

storiesOf('Primitives | Spinner', module).add('Spinner', () => (
  <div
    style={{
      backgroundColor: '#141E29',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Spinner />
  </div>
));
