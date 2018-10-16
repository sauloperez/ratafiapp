import React from 'react';

import './ListItemsCounter.css'

function ListItemsCounter(props) {
  const { count } = props;

  return (
    <span className="ListItemsCounter">{count} left </span>
  );
}

export default ListItemsCounter;
