import React from 'react';

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
    const { label, style, isInvalid, ...otherProps } = this.props;

    return (
      <div className={this.getClassName()} style={style}>
        <label>{ label }</label>
        <input type="text" {...otherProps} />
      </div>
    );
  }
}

export default Field;
