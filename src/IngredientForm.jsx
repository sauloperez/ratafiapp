import React from 'react';

import './IngredientForm.css';

class IngredientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      placeholder: 'Hipèric',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const { value, onIngredientSubmit } = this.state;
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

export default IngredientForm;
