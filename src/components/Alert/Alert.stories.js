import React from 'react';

import { storiesOf } from '@storybook/react';

import Alert from './Alert';

const optionsSuccess = {
  type: 'success',
};

const optionsImporting = {
  type: 'importing',
};

storiesOf('Primitives | Alert', module).add('Default', () => (
  <div>
    <Alert message={'Your goods are being uploaded'} close={() => {}} />
    <Alert message={'Your goods have been matched'} options={optionsSuccess} close={() => {}} />
    <Alert message={'Your goods are being uploaded'} options={optionsImporting} close={() => {}} />
  </div>
));
