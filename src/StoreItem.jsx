import React from 'react';
import PropTypes from 'prop-types';

import './StoreItem.css';

class StoreItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, createdAt, graduation, quantity, lastConsumedAt } = this.props;

    return (
      <tr>
        <td>
          {name}
          {createdAt}
        </td>
        <td>{graduation}</td>
        <td>
          {quantity}
          {lastConsumedAt.toLocaleDateString('es')}
        </td>
        <td>action</td>
      </tr>
    );
  }
}

StoreItem.propTypes = {
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  graduation: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  lastConsumedAt: PropTypes.object.isRequired,
};

export default StoreItem;
