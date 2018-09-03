import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import IngredientList from './ingredient_list.js'
import IngredientForm from './ingredient_form.js'

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

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
