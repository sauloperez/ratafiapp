import React from 'react';
import PropTypes from 'prop-types';

import './StoreItem.css';

function StoreItem(props) {
  const { name, createdAt, graduation, quantity, lastConsumedAt } = props;

  return (
    <tr>
      <td>
        <div>{name}</div>
        <div className="note">{createdAt}</div>
      </td>
      <td>{graduation}</td>
      <td>
        <div>{quantity}</div>
        <div className="note">{lastConsumedAt}</div>
      </td>
      <td><span className="EllipsisButton">...</span></td>
    </tr>
  );
}

StoreItem.propTypes = {
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  graduation: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  lastConsumedAt: PropTypes.string.isRequired,
};

export default StoreItem;
