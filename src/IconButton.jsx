import React from 'react';

import Icon from './Icon';

import './IconButton.css';

function IconButton(props) {
  const { onClick, style, ...otherProps } = props;

  return (
    <button
      type="button"
      onClick={() => onClick()}
      style={style}
      className="IconButton"
    >
      <Icon {...otherProps} />
    </button>
  );
}

export default IconButton;
