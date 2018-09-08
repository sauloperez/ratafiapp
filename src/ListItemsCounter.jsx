import React from 'react';

function ListItemsCounter(props) {
  const { count } = props;

  return (
    <span className="subtle">{count} left </span>
  );
}

export default ListItemsCounter;
