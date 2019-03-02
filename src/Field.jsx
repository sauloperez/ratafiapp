import React from 'react';

import './Field.css';

function Field(props) {
  const { label, style, onChange, value } = props;

  return (
    <div className="Field" style={ style }>
      <label>{ label }</label>
      <input type="text" value={value} onChange={onChange}/>
    </div>
  );
}

export default Field;
