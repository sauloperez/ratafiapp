import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Icon.css';

function Icon(props) {
  const { icon } = props;

  return (
    <FontAwesomeIcon
      icon={icon}
      className="Icon"
    />
  );
}

export default Icon;

Icon.propTypes = { icon: PropTypes.string.isRequired };
