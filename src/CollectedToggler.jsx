import React from 'react';
import PropTypes from 'prop-types';

class ListItemsToggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enabled: true };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    const { onClick } = this.props;

    this.setState(prevState => ({ enabled: !prevState.enabled }));
    onClick();
  }

  render() {
    const { onLabel, offLabel, style } = this.props;
    const { enabled } = this.state;

    return (
      <button onClick={this.onClickHandler} type="button" style={style}>
        {enabled ? onLabel : offLabel}
      </button>
    );
  }
}

ListItemsToggler.propTypes = {
  onLabel: PropTypes.string.isRequired,
  offLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListItemsToggler;
