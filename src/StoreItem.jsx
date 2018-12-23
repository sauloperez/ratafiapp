import React from 'react';
import PropTypes from 'prop-types';

import './StoreItem.css';

function StoreItem(props) {
  const { name, createdAt, graduation, quantity, lastConsumedAt } = props;

  return (
    <tr>
      <td>
        {name}
        {createdAt}
      </td>
      <td>{graduation}°</td>
      <td>
        {quantity}
        {lastConsumedAt.toLocaleDateString('es')}
      </td>
      <td>...</td>
    </tr>
  );
}

StoreItem.propTypes = {
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  graduation: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  lastConsumedAt: PropTypes.instanceOf(Date).isRequired,
};

export default StoreItem;
