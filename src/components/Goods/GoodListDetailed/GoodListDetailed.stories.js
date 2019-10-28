import React from 'react';

import { storiesOf } from '@storybook/react';

import GoodListDetailed from './GoodListDetailed';

storiesOf('Product / Good List Detailed', module)
  .add('Default', () => (
    <GoodListDetailed
      goodImage="https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
      goodName="Stainless Steel Stapler Stainless Steel "
      goodQuantity={1}
      goodSku="3128309289"
      unitPrice={10.8}
      size="small"
    />
  ))
  .add('Empty', () => <GoodListDetailed />);
