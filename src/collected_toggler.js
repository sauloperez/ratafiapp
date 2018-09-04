import React from 'react';

class ListItemsToggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enabled: true };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState((prevState, props) => {
      return { enabled: !prevState.enabled };
    });
    this.props.onClick();
  }

  render() {
    const { onLabel, offLabel } = this.props;

    return (
      <button onClick={this.onClickHandler} style={this.props.style}>
        {this.state.enabled ? onLabel : offLabel}
      </button>
    );
  }
}

export default ListItemsToggler;
