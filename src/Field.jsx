import React from 'react';

import './Field.css';

function Field(props) {
  const { label, style } = props;

  return (
    <div className="Field" style={ style }>
      <label>{ label }</label>
      <input type="text" {...props} />
    </div>
  );
}

export default Field;
