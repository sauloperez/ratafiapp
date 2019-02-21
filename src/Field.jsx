import React from 'react';

function Field(props) {
  const { label } = props;

  return (
    <div className="Field">
      <label>{ label }</label>
      <input />
    </div>
  );
}

export default Field;
