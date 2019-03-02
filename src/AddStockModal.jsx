import React from 'react';

import Modal from './Modal';
import Field from './Field';
import Button from './Button';

class AddStockDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(newStock) {
    const { onSubmit, onClose } = this.props;

    onSubmit(newStock);
    onClose();
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    const { onClose } = this.props;
    const { name } = this.state;

    const newStock = {
      id: 3,
      name: name,
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
        <Field
          label="Nom"
          style={{ width: '100%' }}
          value={name}
          onChange={this.handleChange}
        />
        <Field label="Quantitat" style={{ width: '50%' }} />
        <Field label="Graduació" style={{ width: '50%' }} />
      </Modal>
    );
  }
}

export default AddStockDialog;
