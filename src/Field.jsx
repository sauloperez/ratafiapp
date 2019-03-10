import React from 'react';
import PropTypes from 'prop-types';

import './Field.css';

class Field extends React.Component {
  getClassName() {
    const { isInvalid } = this.props;
    let className = 'Field';

    if (isInvalid) {
      className += ' Field--error';
    }

    return className;
  }

  render() {
    const { label, style, isInvalid, validationMessage, ...otherProps } = this.props;

    return (
      <div className={this.getClassName()} style={style}>
        <label>{ label }</label>
        <input type="text" {...otherProps} />
        {validationMessage
            && <div className="Field__error-message">{ validationMessage }</div>
        }
      </div>
    );
  }
}

Field.propTypes = {
  label: PropTypes.string.isRequired,
  isInvalid: PropTypes.bool,
  validationMessage: PropTypes.string,
};

Field.defaultProps = {
  isInvalid: false,
  validationMessage: null,
};

export default Field;
