import React from 'react';

import './Field.css';

function Field(props) {
  const { label, style, ...otherProps } = props;

  return (
    <div className="Field" style={ style }>
      <label>{ label }</label>
      <input type="text" {...otherProps} />
    </div>
  );
}

export default Field;
