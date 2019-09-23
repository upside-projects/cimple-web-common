import React from 'react';

import { storiesOf } from '@storybook/react';

import TextArea from './TextArea';

storiesOf('Primitives | Forms / Text Area', module).add('Default', () => (
  <TextArea label="Description" name="Description" placeholder="A huge description" />
));
