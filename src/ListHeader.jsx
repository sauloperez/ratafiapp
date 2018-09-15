import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ListHeader.css';

function ListHeader(props) {
  const { listName, count } = props;

  return (
    <header className="ListHeader">
      <p className="subtle">{count} ingredients </p>
      <div className="title">
        <h1>{listName}</h1>
        <FontAwesomeIcon
          icon="pencil-alt"
          className="ActionIcon"
        />
      </div>
    </header>
  );
}

ListHeader.propTypes = {
  listName: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default ListHeader;