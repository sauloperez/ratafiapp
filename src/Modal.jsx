import React from 'react';

import Icon from './Icon';

import './Modal.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, children, button } = this.props;

    return (
      <div className="Modal__Backdrop">
        <div className="Modal" style={{ position: 'relative' }}>
          <Icon
            icon="times"
            className="Icon Icon--close"
            style={{ position: 'absolute', top: '16px', right: '8px' }}
          />
          <header className="Modal__Header">
            <h3>{ title }</h3>
          </header>
          <div className="Modal__Body">
            { children }
          </div>
          <div className="Modal__ButtonGroup">
            { button }
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
