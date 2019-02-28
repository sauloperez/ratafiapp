import React from 'react';
import PropTypes from 'prop-types';

import IconButton from './IconButton';

import './Modal.css';

function Modal(props) {
  const { title, children, button, onClose } = props;

  return (
    <div className="Modal__Backdrop">
      <div className="Modal" style={{ position: 'relative' }}>
        <IconButton
          icon="times"
          className="Icon Icon--close"
          onClick={onClose}
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

Modal.defaultProps = { title: '' };

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  button: PropTypes.element.isRequired,
};

export default Modal;
