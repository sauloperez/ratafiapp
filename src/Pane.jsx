import React from 'react';

function Pane(props) {
  return (
    <div
      className={props.className}
      style={{ width: props.width }}>
      {props.children}
    </div>
  );
}

export default Pane;
