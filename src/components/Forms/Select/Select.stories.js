import React from 'react';

import { storiesOf } from '@storybook/react';

import Select from './Select';

const Categories = [{ label: 'Arts & Crafts', value: 'ARTS_CRAFTS' }, { label: 'Stationery', value: 'STATIONERY' }];

storiesOf('Primitives | Forms / Select', module).add('Default', () => (
  <Select label="Categories" name="Categories" placeholder="Select a category" options={Categories} />
));
