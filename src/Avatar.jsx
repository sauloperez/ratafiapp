import React from 'react';

import './Avatar.css';

import Icon from './Icon';

class Avatar extends React.Component {
  render() {
    return (
      <div class="Avatar">
        <img class="Avatar__picture" src="https://pbs.twimg.com/profile_images/820296060316721153/DuXixESD_bigger.jpg" alt="avatar"  width="28" height="28"/>
        <Icon icon="chevron-down" />
      </div>
    );
  }
}

export default Avatar;
