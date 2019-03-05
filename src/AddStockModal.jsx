import React from 'react';

import Modal from './Modal';
import Field from './Field';
import Button from './Button';

import StockItem from './models/stock_item';

class AddStockDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      quantity: '',
      strength: '',
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
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { onClose } = this.props;
    const { name, quantity, strength } = this.state;

    const newStock = new StockItem(name, quantity, strength);

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
          name="name"
          value={name}
          onChange={this.handleChange}
          style={{ width: '100%' }}
        />
        <Field
          label="Quantitat"
          name="quantity"
          value={quantity}
          onChange={this.handleChange}
          style={{ width: '50%' }}
        />
        <Field
          label="Graduació"
          name="strength"
          value={strength}
          placeholder="20°"
          onChange={this.handleChange}
          style={{ width: '50%' }}
        />
      </Modal>
    );
  }
}

export default AddStockDialog;
