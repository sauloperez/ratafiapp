import React from 'react';

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

export default IngredientList;
