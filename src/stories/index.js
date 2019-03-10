import React from 'react';

import { storiesOf } from '@storybook/react';

import '../index.css';
import Field from '../Field';

storiesOf('Field', module)
  .add('regular', () => <Field style={{ width: '120px' }} label="Nom" />)
  .add('focus', () => (
    <Field
      style={{ width: '120px' }}
      autoFocus
      label="Nom"
    />))
  .add('invalid', () => (
    <Field
      isInvalid
      style={{ width: '120px' }}
      label="Nom"
      validationMessage="Valor invalid"
    />
  ));
