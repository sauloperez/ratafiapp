import React from 'react';

import Icon from './Icon';

import './Button.css';

function Button(props) {
  const { label, icon } = props;

  return (
    <a className="Button" type="button" href="#" {...props}>
      {icon && <Icon icon="plus" />}
      <span className="Button__text">{label}</span>
    </a>
  );
}

export default Button;
