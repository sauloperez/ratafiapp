import React from 'react';

import './SidebarItem.css';
import './Sidebar.css';

import Icon from './Icon';
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

    return className;
  }

  render() {
    const { item } = this.props;
    const { name, icon } = item;

    return (
      <li className={this.getClassName()}>
        <a className={this.getLinkClassName()} href="#">{name}</a>
      </li>
    );
  }
}

function Sidebar(props) {
  const { items } = props;

  return (
    <Pane className="Sidebar">
      <ul>
        {items.map(item => <SidebarItem key={item.id} item={item} />)}
      </ul>
    </Pane>
  );
}

export default Sidebar;
