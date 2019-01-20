import React from 'react';

function Field(props) {
  const { label } = props;

  return (
    <div>
      <label>{ label }</label>
      <input />
    </div>
  );
}

export default Field;
