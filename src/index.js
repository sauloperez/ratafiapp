import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        { id: 1, name: "Nous", collected: false },
        { id: 2, name: "Brot verd d'esbarzer", collected: false },
      ]
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.onItemClickHandler = this.onItemClickHandler.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  addIngredient(name) {
    const ingredients = this.state.ingredients.slice();
    ingredients.push({ id: ingredients.length + 1, name: name });

    this.setState({ ingredients: ingredients });
  }

  onItemClickHandler(id) {
    const ingredients = this.state.ingredients.slice();
    const clickedIngredient = ingredients.find(
      ingredient => ingredient.id === id
    );
    clickedIngredient.collected = true;
    this.setState({ ingredients: ingredients });
  }

  render() {
    const shownIngredients = this.state.ingredients.filter(
      ingredient => !ingredient.collected
    );

    return (
      <React.Fragment>
        <IngredientForm onIngredientSubmit={this.addIngredient}/>
        <IngredientList
          ingredients={shownIngredients}
          onClick={this.onItemClickHandler} />
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
      {props.ingredients.map(ingredient => {
        return <IngredientListItem
          onClick={props.onClick}
          key={ingredient.id}
          id={ingredient.id}
          name={ingredient.name}
          collected={ingredient.collected} />
      })}
    </ul>
  );
}

function IngredientListItem(props) {
  return (
    <li
      onClick={() => props.onClick(props.id)}
      className={props.collected ? 'disabled' : 'enabled'}
    >
      {props.name}
    </li>
  );
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
