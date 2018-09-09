import React from 'react';
import PropTypes from 'prop-types';

import IngredientListItem from './IngredientListItem';

function IngredientList(props) {
  const { ingredients } = props;

  return (
    <ul>
      {ingredients.map(
        ingredient => (
          <IngredientListItem
            key={ingredient.id}
            onClick={props.onClick}
            {...ingredient}
          />
        ),
      )}
    </ul>
  );
}

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func.isRequired,
};

IngredientList.defaultProps = { ingredients: [] };

export default IngredientList;
