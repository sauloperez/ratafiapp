import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input.jsx';

class IngredientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      placeholder: 'Afegeix ingredient',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const { value } = this.state;
    const { onIngredientSubmit } = this.props;

    event.preventDefault();
    onIngredientSubmit(value);

    this.setState({ value: '' });
  }

  render() {
    const { placeholder, value } = this.state;

    return (
      <form
        className="IngredientForm"
        onSubmit={this.handleSubmit}
      >
        <Input
          name="name"
          type="text"
          modifier="full"
          placeholder={placeholder}
          value={value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

IngredientForm.propTypes = { onIngredientSubmit: PropTypes.func.isRequired };

export default IngredientForm;
