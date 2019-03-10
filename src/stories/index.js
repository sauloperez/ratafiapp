import React from 'react';

import { storiesOf } from '@storybook/react';

import '../index.css';
import Field from '../Field';

storiesOf('Field', module)
  .add('regular', () => <Field style={{ width: '120px' }} />)
  .add('active', () => <Field style={{ width: '120px' }} />)
  .add('invalid', () => (
    <Field
      isInvalid
      style={{ width: '120px' }}
      label="Nom"
      validationMessage="Valor invalid"
    />
  ));
