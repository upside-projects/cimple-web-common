import React from 'react';

import { storiesOf } from '@storybook/react';

import Thumbnail from './Thumbnail';

storiesOf('Thumbnail/Sizing', module)
  .add('Large', () => (
    <Thumbnail
      size="large"
      src="https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
    />
  ))
  .add('Medium', () => (
    <Thumbnail src="https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80" />
  ))
  .add('Small', () => (
    <Thumbnail
      size="small"
      src="https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
    />
  ))
  .add('Miniature', () => (
    <Thumbnail
      size="mini"
      src="https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
    />
  ))
  .add('Empty', () => <Thumbnail />);
