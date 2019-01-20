import React from 'react';

import Button from './Button';
import Icon from './Icon';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, children } = this.props;

    return (
      <div>
        <header>
          <h3>{ title }</h3>
          <Icon icon="times" />
        </header>
        <div>
          { children }
        </div>
        <div className="ButtonGroup">
          <Button label="Afegir"/>
        </div>
      </div>
    );
  }
}

export default Modal;
