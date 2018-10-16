import React from 'react';

import './ActionIcon.css';

import Icon from './Icon';

function ActionIcon(props) {
  return (
    <span className="ActionIcon">
      <Icon {...props} />
    </span>
  );
}

export default ActionIcon;
