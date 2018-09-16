import React from 'react';

import './Input.css';

function Input(props) {
  function getClassName() {
    let className = 'Input';

    if (props.modifier) {
      className += ` Input--${props.modifier}`;
    }

    return className;
  }

  return (
    <input className={getClassName()} {...props} />
  );
}

export default Input;
