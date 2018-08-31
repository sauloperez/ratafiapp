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
  }

  render() {
    return (
      <IngredientList ingredients={this.state.ingredients}/>
    );
  }
}

class IngredientList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.ingredients.map(ingredient => (
          <IngredientListItem
            key={ingredient.id}
            name={ingredient.name} />
        ))}
      </ul>
    );
  }
}

class IngredientListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: true,
    };
  }

  render() {
    return (
      <li
        className={this.state.enabled ? 'enabled' : 'disabled'}
        onClick={() => this.setState({enabled: !this.state.enabled})}
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
