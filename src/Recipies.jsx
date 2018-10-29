import React from 'react';
import { Link } from "react-router-dom";

import './Recipies.css';

import Body from './Body';

function CardList(props) {
  return (
    <div className="CardList">
      {props.children}
    </div>
  );
}

class Recipies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipies: [
        {
          id: 1,
          name: 'Recepta del 2017',
          numIngredients: 37,
        },
        {
          id: 2,
          name: 'Primera recepta',
          numIngredients: 6,
        },
        {
          id: 3,
          name: 'Segona',
          numIngredients: 12,
        },
        {
          id: 4,
          name: 'Any 2018',
          numIngredients: 42,
        },
      ],
    };
  }

  render() {
    const { recipies } = this.state;

    return (
      <Body>
        <h1>Receptes</h1>

        <CardList>
          {recipies.map(recipie => (
            <div className="Card" key={recipie.id}>
              <Link to={`/recipies/${recipie.id}`}>
                <h3>{recipie.name}</h3>
                {recipie.numIngredients > 0 && <p>{recipie.numIngredients} ingredients</p>}
              </Link>
            </div>
          ))}
        </CardList>
      </Body>
    );
  }
}

export default Recipies;
