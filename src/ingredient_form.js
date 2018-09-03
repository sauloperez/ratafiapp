import React from 'react';

class IngredientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      placeholder: 'Hipèric'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onIngredientSubmit(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          autoFocus
          name="name"
          type="text"
          placeholder={this.state.placeholder}
          value={this.state.value}
          onChange={this.handleChange}/>
      </form>
    )
  }
}

export default IngredientForm;
