import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import '../index.css';
import Field from '../Field';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

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
