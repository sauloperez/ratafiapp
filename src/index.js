import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Ingredient extends React.Component {
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

class List extends React.Component {
  render() {
    return (
      <ul>
        <Ingredient name="Nous"/>
        <Ingredient name="Brot verd d'esbarzer"/>
      </ul>
    );
  }
}

// ========================================

ReactDOM.render(
  <List />,
  document.getElementById('root')
);
