import React from 'react';
import PropTypes from 'prop-types';

import './IngredientForm.css';

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
  }

  render() {
    const { placeholder, value } = this.state;

    return (
      <form
        className="IngredientForm"
        onSubmit={this.handleSubmit}
      >
        <input
          name="name"
          type="text"
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
