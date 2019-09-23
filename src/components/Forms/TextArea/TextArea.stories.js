import React from 'react';

import { storiesOf } from '@storybook/react';

import Textarea from './Textarea';

storiesOf('Primitives | Forms / Text Area', module).add('Default', () => (
  <Textarea label="Description" name="Description" placeholder="A huge description" />
));
