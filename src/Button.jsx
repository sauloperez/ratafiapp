import React from 'react';

import './Button.css';

function Button(props) {
  const { label } = props;

  return (
    <a className="Button" type="button" {...props}>
      {label}
    </a>
  );
}

export default Button;
