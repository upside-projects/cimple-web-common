import React from 'react';

import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';

import MatchingPairs from './MatchingPairs';

const store = new Store({});

const goods = [
  {
    name: 'Good name',
    id: 1,
    source: {
      name: 'Supplier name',
      image: {
        small: null,
        large: null,
      },
    },
    price: '$10.00',
    image: {
      small:
        'https://cimple-marketplace-assets.s3.amazonaws.com/images/marketplace/goods/Mono%20Clock-093f3e2c-df19-11e9-98cc-063adcffc714_large.jpg?v=63736582623',
      large:
        'https://cimple-marketplace-assets.s3.amazonaws.com/images/marketplace/goods/Mono%20Clock-093f3e2c-df19-11e9-98cc-063adcffc714_large.jpg?v=63736582623',
    },
  },
  {
    name: 'Good name',
    id: 2,
    source: {
      name: 'Supplier name',
      image: {
        small: null,
        large: null,
      },
    },
    price: '$10.00',
    image: {
      small:
        'https://cimple-marketplace-assets.s3.amazonaws.com/images/marketplace/goods/Mono%20Clock-093f3e2c-df19-11e9-98cc-063adcffc714_large.jpg?v=63736582623',
      large:
        'https://cimple-marketplace-assets.s3.amazonaws.com/images/marketplace/goods/Mono%20Clock-093f3e2c-df19-11e9-98cc-063adcffc714_large.jpg?v=63736582623',
    },
  },
];

const similarityPercentage = 54;

storiesOf('Matching', module).add('Default', () => (
  <State store={store}>
    {state => (
      <div style={{ width: '80vw' }}>
        <MatchingPairs goods={goods} similarityPercentage={similarityPercentage} />
      </div>
    )}
  </State>
));
