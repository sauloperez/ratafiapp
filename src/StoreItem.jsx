import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import EllipsisButton from './EllipsisButton';

import './StoreItem.css';

function StoreItem(props) {
  const { name, createdAt, strength, quantity, lastConsumedAt } = props;

  return (
    <tr>
      <td>
        <div>{name}</div>
        <div className="note">{createdAt}</div>
      </td>
      <td>{strength}</td>
      <td>
        <div>{quantity}</div>
        <div className="note">{Moment(lastConsumedAt).fromNow()}</div>
      </td>
      <td><EllipsisButton /></td>
    </tr>
  );
}

StoreItem.propTypes = {
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  strength: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  lastConsumedAt: PropTypes.object.isRequired,
};

export default StoreItem;
