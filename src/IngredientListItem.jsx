import React from 'react';
import PropTypes from 'prop-types';

import './IngredientListItem.css';

import Input from './Input';
import ActionIcon from './ActionIcon';

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
    this.handleChange = this.handleChange.bind(this);
  }

  getClassName() {
    const { collected } = this.props;
    const { editing } = this.state;
    let className = 'Input';

    if (collected) {
      className += ' Input--disabled';
    }

    if (!editing) {
      className += ' Input--hidden';
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

  handleChange(event) {
    if (event.target.value !== '') {
      this.setState({ name: event.target.value });
    }
  }

  toggleEditing() {
    this.setState(prevState => ({ editing: !prevState.editing }));
  }

  render() {
    const { name } = this.state;
    const { id, collected, amount, onClick } = this.props;

    return (
      <li className="IngredientListItem">
        <div className="IngredientListItem__wrapper" onClick={this.toggleEditing}>
          <input
            type="checkbox"
            checked={collected}
            onChange={() => onClick(id)}
          />
          <Input
            className={this.getClassName()}
            value={name}
            onBlur={this.handleBlur}
            onKeyDown={this.handleKeyDown}
            onChange={this.handleChange}
          />
          <ActionIcon icon="pencil-alt" />
          <span style={{ float: 'right', padding: '12px 0' }} className="subtle">{amount}</span>
        </div>
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
