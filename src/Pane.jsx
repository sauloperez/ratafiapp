import React from 'react';

function Pane(props) {
  return (
    <div
      className="Pane"
      style={{ width: props.width }}>
      {props.children}
    </div>
  );
}

export default Pane;
