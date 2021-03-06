import React from 'react';
import PropTypes from 'prop-types';

import LinkButton from './LinkButton';

class Toggle extends React.Component {
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
      <LinkButton
        onClick={this.onClickHandler}
        label={enabled ? onLabel : offLabel}
        style={style}
      />
    );
  }
}

Toggle.propTypes = {
  onLabel: PropTypes.string.isRequired,
  offLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Toggle;
