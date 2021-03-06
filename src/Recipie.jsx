import React from 'react';
import { Link } from 'react-router-dom';

import IngredientList from './IngredientList';
import IngredientForm from './IngredientForm';
import ListItemsToggler from './Toggle';
import ListItemsCounter from './ListItemsCounter';
import IngredientListHeader from './ListHeader';
import Icon from './Icon';

import './Recipie.css';

class Recipie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAll: false,
      listName: 'Edició 2018',
      ingredients: [
        { id: 1, name: 'Nous', amount: '4 unitats', collected: false },
        { id: 2, name: "Brot verd d'esbarzer", amount: '1 brot', collected: false },
        { id: 3, name: 'Fonoll', amount: '2 unitats', collected: false },
        { id: 4, name: 'Cua de cavall', amount: '1 unitat', collected: false },
        { id: 5, name: 'Sempre viva', amount: '3 unitats', collected: false },
      ],
    };

    this.addIngredient = this.addIngredient.bind(this);
    this.onListItemsTogglerClickHandler = this.onListItemsTogglerClickHandler.bind(this);
    this.onItemClickHandler = this.onItemClickHandler.bind(this);
  }

  onItemClickHandler(id) {
    let { ingredients } = this.state;
    ingredients = ingredients.slice();

    const clickedIngredient = ingredients.find(
      ingredient => ingredient.id === id,
    );
    clickedIngredient.collected = !clickedIngredient.collected;

    this.setState({ ingredients });
  }

  onListItemsTogglerClickHandler() {
    this.setState(prevState => ({ showAll: !prevState.showAll }));
  }

  addIngredient(name) {
    let { ingredients } = this.state;
    ingredients = ingredients.slice();
    ingredients.push({ id: ingredients.length + 1, name });

    this.setState({ ingredients });
  }

  render() {
    const { showAll, ingredients, listName } = this.state;
    let shownIngredients;

    if (showAll) {
      shownIngredients = ingredients;
    } else {
      shownIngredients = ingredients.filter(
        ingredient => !ingredient.collected,
      );
    }

    const uncollectedIngredients = ingredients.filter(
      ingredient => !ingredient.collected,
    );

    return (
      <div>
        <div className="IngredientsContainer">
          <nav className="Recipie__nav">
            <Link to="/recipies" >
              <Icon icon="arrow-left" />
              Torna a receptes
            </Link>
          </nav>

          <IngredientListHeader
            listName={listName}
            count={ingredients.length}
          />
          <div className="ActionGroup ActionGroup--right">
            <ListItemsToggler
              onLabel="Show all"
              offLabel="Hide collected"
              onClick={this.onListItemsTogglerClickHandler}
            />
          </div>
          <IngredientForm
            onIngredientSubmit={this.addIngredient}
          />
          <IngredientList
            ingredients={shownIngredients}
            onClick={this.onItemClickHandler}
          />
          <ListItemsCounter count={uncollectedIngredients.length} />
        </div>
      </div>
    );
  }
}

export default Recipie;
