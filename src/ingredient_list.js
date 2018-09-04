import React from 'react';

function IngredientList(props) {
  return (
    <ul>
      {props.ingredients.map(ingredient => {
        return <IngredientListItem onClick={props.onClick} {...ingredient} />
      })}
    </ul>
  );
}

class ListItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        onBlur={this.props.onBlur}
        onKeyDown={this.props.onKeyDown}
      />
    );
  }
}

class IngredientListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      editing: false
    }

    this.toggleEditing = this.toggleEditing.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  toggleEditing() {
    this.setState((prevState, props) => {
      return { editing: !prevState.editing };
    });
  }

  handleBlur(event) {
    this.setState({
      editing: false,
      name: this.props.name
    });
  }

  handleKeyDown(event) {
    const ENTER_KEY = 13;

    if (event.which === ENTER_KEY) {
      this.setState({
        editing: false,
        name: event.target.value
      });
    }
  }

  getClassName() {
    let className = 'ingredient-list-item';

    if (this.props.collected) {
      className += ' disabled';
    }
    else {
      className += ' enabled';
    }

    return className;
  }

  render() {
    let item;

    if (this.state.editing) {
      item = <ListItemForm
        value={this.state.name}
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyDown}
      />
    }
    else {
      item = <a onClick={this.toggleEditing}>{this.state.name}</a>
    }

    return (
      <li className={this.getClassName()}>
        <input
          type="checkbox"
          checked={this.props.collected}
          onChange={() => this.props.onClick(this.props.id)}
        />
        {item}
        <span style={{float: 'right'}} className='subtle'>{this.props.amount}</span>
      </li>
    );
  }
}

export default IngredientList;
