import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faPencilAlt)

import IngredientList from './ingredient_list.js'
import IngredientForm from './ingredient_form.js'
import ListItemsToggler from './collected_toggler.js'
import IngredientListHeader from './list_header.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false,
      listName: 'Edició 2018',
      ingredients: [
        { id: 1, name: "Nous", amount: '4 unitats', collected: false },
        { id: 2, name: "Brot verd d'esbarzer", amount: '1 brot', collected: false },
        { id: 3, name: "Fonoll", amount: '2 unitats', collected: false },
        { id: 4, name: "Cua de cavall", amount: '1 unitat', collected: false },
        { id: 5, name: "Sempre viva", amount: '3 unitats', collected: false },
      ]
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.onItemClickHandler = this.onItemClickHandler.bind(this);
    this.onListItemsTogglerClickHandler = this.onListItemsTogglerClickHandler.bind(this);
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
    clickedIngredient.collected = !clickedIngredient.collected;
    this.setState({ ingredients: ingredients });
  }

  onListItemsTogglerClickHandler() {
    this.setState((prevState, props) => {
      return { showAll: !prevState.showAll };
    });
  }

  render() {
    let shownIngredients;

    if (this.state.showAll) {
      shownIngredients = this.state.ingredients;
    }
    else {
      shownIngredients = this.state.ingredients.filter(
        ingredient => !ingredient.collected
      );
    }

    const uncollectedIngredients = this.state.ingredients.filter(
      ingredient => !ingredient.collected
    );

    return (
      <div className='ingredients-container'>
        <IngredientListHeader
          listName={this.state.listName}
          count={this.state.ingredients.length}
        />
        <IngredientForm
          className='ingredient-form'
          onIngredientSubmit={this.addIngredient}/>
        <IngredientList
          ingredients={shownIngredients}
          onClick={this.onItemClickHandler} />
        <ListItemsCounter count={uncollectedIngredients.length} />
        <ListItemsToggler
          onLabel="Show all"
          offLabel="Hide collected"
          style={{float: 'right'}}
          onClick={this.onListItemsTogglerClickHandler} />
      </div>
    );
  }
}

function ListItemsCounter(props) {
  return (
    <span className='subtle'>{props.count} left</span>
  );
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
