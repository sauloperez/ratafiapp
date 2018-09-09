import React from 'react';
import PropTypes from 'prop-types';

import ListItemForm from './ListItemForm';

class IngredientListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      editing: false,
    };

    this.toggleEditing = this.toggleEditing.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  getClassName() {
    const { collected } = this.props;
    let className = 'ingredient-list-item';

    if (collected) {
      className += ' disabled';
    } else {
      className += ' enabled';
    }

    return className;
  }

  handleKeyDown(event) {
    const ENTER_KEY = 13;

    if (event.which === ENTER_KEY) {
      this.setState({
        editing: false,
        name: event.target.value,
      });
    }
  }

  handleBlur() {
    const { name } = this.props;

    this.setState({
      editing: false,
      name,
    });
  }

  toggleEditing() {
    this.setState(prevState => ({ editing: !prevState.editing }));
  }

  render() {
    let item;
    const { editing, name } = this.state;
    const { id, collected, amount, onClick } = this.props;

    if (editing) {
      item = (
        <ListItemForm
          value={name}
          onBlur={this.handleBlur}
          onKeyDown={this.handleKeyDown}
        />
      );
    } else {
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      item = <span onClick={this.toggleEditing} role="button" tabIndex="-1">{name}</span>;
    }

    return (
      <li className={this.getClassName()}>
        <input
          type="checkbox"
          checked={collected}
          onChange={() => onClick(id)}
        />
        {item}
        <span style={{ float: 'right' }} className="subtle">{amount}</span>
      </li>
    );
  }
}

IngredientListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  collected: PropTypes.bool.isRequired,
  amount: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

IngredientListItem.defaultProps = { amount: '' };

export default IngredientListItem;
