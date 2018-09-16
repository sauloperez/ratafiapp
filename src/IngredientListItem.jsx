import React from 'react';
import PropTypes from 'prop-types';

import './IngredientListItem.css';

import Input from './Input';
import Icon from './Icon';

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
    let className = 'IngredientListItem--label';

    if (collected) {
      className += ` ${className}-disabled`;
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
    let content;
    const { editing, name } = this.state;
    const { id, collected, amount, onClick } = this.props;

    if (editing) {
      content = (
        <Input
          autoFocus
          value={name}
          onBlur={this.handleBlur}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
          modifier="full"
          style={{ height: '53px' }}
        />
      );
    } else {
      content = (
        <div className="IngredientListItem--wrapper" onClick={this.toggleEditing}>
          <input
            type="checkbox"
            checked={collected}
            onChange={() => onClick(id)}
            style={{ marginRight: '8px' }}
          />
          <span className={this.getClassName()} role="button" tabIndex="-1">
            {name}
          </span>
          <Icon icon="pencil-alt" />
          <span style={{ float: 'right' }} className="subtle">{amount}</span>
        </div>
      );
    }

    return (
      <li className="IngredientListItem">
        {content}
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
