import React from 'react';
import PropTypes from 'prop-types';

class ListItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    const { onBlur, onKeyDown } = this.props;

    return (
      <input
        type="text"
        value={value}
        onChange={this.handleChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
    );
  }
}

ListItemForm.propTypes = {
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default ListItemForm;
