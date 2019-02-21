import React from 'react';

import Modal from './Modal';
import Field from './Field';
import Button from './Button';

function AddStockDialog(props) {
  return (
    <Modal
      title="Nou estoc"
      button={
        <Button label="Afegir" />
      }
      {...props}
    >
      <Field label="Nom" />
      <Field label="Quantitat" />
      <Field label="Graduació" />
    </Modal>
  );
}

export default AddStockDialog;
