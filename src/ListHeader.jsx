import React from 'react';
import PropTypes from 'prop-types';

import ActionIcon from './ActionIcon';

import './ListHeader.css';

function ListHeader(props) {
  const { listName, count } = props;

  return (
    <header className="ListHeader">
      <p className="ListHeader__p">{count} ingredients</p>
      <div className="ListHeader__title">
        <h1 className="ListHeader__h1">{listName}</h1>
        <ActionIcon icon="pencil-alt" />
      </div>
    </header>
  );
}

ListHeader.propTypes = {
  listName: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default ListHeader;
