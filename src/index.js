import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        { id: 1, name: "Nous" },
        { id: 2, name: "Brot verd d'esbarzer" },
      ]
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  addIngredient(name) {
    const ingredients = this.state.ingredients.slice();
    ingredients.push({ id: ingredients.length + 1, name: name });

    this.setState({ ingredients: ingredients });
  }

  render() {
    return (
      <React.Fragment>
        <IngredientForm onIngredientSubmit={this.addIngredient}/>
        <IngredientList ingredients={this.state.ingredients}/>
      </React.Fragment>
    );
  }
}

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
          name="name"
          type="text"
          placeholder={this.state.placeholder}
          value={this.state.value}
          onChange={this.handleChange}/>

        <input type="submit" value="Submit" />
      </form>
    )
  }
}

function IngredientList(props) {
  return (
    <ul>
      {props.ingredients.map(ingredient => (
        <IngredientListItem
          key={ingredient.id}
          name={ingredient.name} />
      ))}
    </ul>
  );
}

class IngredientListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: true,
    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((prevState, props) => {
      return {enabled: !prevState.enabled}
    });
  }

  render() {
    return (
      <li
        className={this.state.enabled ? 'enabled' : 'disabled'}
        onClick={this.handleClick}
      >
        {this.props.name}
      </li>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
