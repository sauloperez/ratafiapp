import React from 'react';

import Modal from './Modal';
import Field from './Field';
import Button from './Button';

function AddStockDialog(_props) {
  return (
    <Modal
      title="Nou estoc"
      button={
        <Button label="Afegir" />
      }
    >
      <Field label="Nom" />
      <Field label="Quantitat" />
      <Field label="Graduació" />
    </Modal>
  );
}

export default AddStockDialog;
