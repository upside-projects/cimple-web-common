import React from 'react';

import { storiesOf } from '@storybook/react';

import Alert from './Alert';

storiesOf('Primitives | Alert', module).add('Default', () => (
  <Alert message={'Your goods are being uploaded'} close={() => {}} />
));
