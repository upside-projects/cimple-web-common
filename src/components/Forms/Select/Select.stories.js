import React from 'react';

import { storiesOf } from '@storybook/react';

import Select from './Select';

const Categories = ['Arts & Crafts', 'Stationery', 'Furniture', 'Facilites Management', 'Sports'];

storiesOf('Primitives | Forms / Select', module).add('Default', () => (
  <Select label="Categories" name="Categories" placeholder="Select a category" options={Categories} />
));
