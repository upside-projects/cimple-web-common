import React from 'react';

import { storiesOf } from '@storybook/react';

import GoodList from './GoodList';

storiesOf('Product/ Good List', module)
  .add('Default', () => (
    <GoodList
      goodImage="https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
      goodName="Stainless Steel Stapler"
      goodSku="3128309289"
    />
  ))
  .add('No SKU', () => (
    <GoodList
      goodImage="https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
      goodName="Stainless Steel Stapler"
      noSku
    />
  ))
  .add('Empty', () => <GoodList />);
