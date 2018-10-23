import React from 'react';

import './SidebarItem.css';

import Icon from './Icon';
import ActionIcon from './ActionIcon';
import Pane from './Pane';

class SidebarItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: props.item.active }
  }

  getClassName() {
    let className = 'SidebarItem';
    const { active } = this.state;

    if (active) {
      className += ' SidebarItem--active';
    }

    return className;
  }

  getLinkClassName() {
    let className = 'SidebarItem__link';
    const { active } = this.state;

    if (active) {
      className += ' SidebarItem__link--active';
    }

    return className;
  }

  render() {
    const { item } = this.props;
    const { name, icon } = item;

    return (
      <li className={this.getClassName()}>
        { this.state.active ? <ActionIcon icon={icon} /> : <Icon icon={icon} /> }
        <a className={this.getLinkClassName()} href="#">{name}</a>
      </li>
    );
  }
}

function Sidebar(props) {
  const { items } = props;

  return (
    <Pane
      width="240px"
      className="Sidebar"
    >
      <ul>
        {items.map(item => <SidebarItem key={item.id} item={item} />)}
      </ul>
    </Pane>
  );
}

export default Sidebar;
