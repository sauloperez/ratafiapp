import React from 'react';

import './LinkButton.css';

function LinkButton(props) {
  const { label } = props;

  return (
    <button className="LinkButton" type="button" {...props}>
      {label}
    </button>
  );
}

export default LinkButton;
