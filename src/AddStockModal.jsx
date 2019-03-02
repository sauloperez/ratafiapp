import React from 'react';

import Modal from './Modal';
import Field from './Field';
import Button from './Button';

function AddStockDialog(props) {
  const { onSubmit, onClose } = props;

  const newStock = {
    id: 3,
    name: 'Barreja',
    createdAt: 2018,
    graduation: '27°',
    quantity: 3,
    lastConsumedAt: new Date(2018, 11, 5),
  }

  function handleSubmit(newStock) {
    onSubmit(newStock);
    onClose();
  }

  return (
    <Modal
      title="Nou estoc"
      onClose={onClose}
      button={
        <Button label="Afegir" onClick={() => handleSubmit(newStock)} />
      }
      {...props}
    >
      <Field label="Nom" style={{ width: '100%' }} />
      <Field label="Quantitat" style={{ width: '50%' }} />
      <Field label="Graduació" style={{ width: '50%' }} />
    </Modal>
  );
}

export default AddStockDialog;
