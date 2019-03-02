import React from 'react';

import Modal from './Modal';
import Field from './Field';
import Button from './Button';

class AddStockDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newStock) {
    const { onSubmit, onClose } = this.props;

    onSubmit(newStock);
    onClose();
  }

  render() {
    const { onClose } = this.props;

    const newStock = {
      id: 3,
      name: 'Barreja',
      createdAt: 2018,
      graduation: '27°',
      quantity: 3,
      lastConsumedAt: new Date(2018, 11, 5),
    }

    return (
      <Modal
        title="Nou estoc"
        onClose={this.onClose}
        button={
          <Button label="Afegir" onClick={() => this.handleSubmit(newStock)} />
        }
        {...this.props}
      >
        <Field label="Nom" style={{ width: '100%' }} />
        <Field label="Quantitat" style={{ width: '50%' }} />
        <Field label="Graduació" style={{ width: '50%' }} />
      </Modal>
    );
  }
}

export default AddStockDialog;
