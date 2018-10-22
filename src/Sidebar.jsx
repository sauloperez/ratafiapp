import React from 'react';

import './SidebarItem.css';

import Icon from './Icon';
import ActionIcon from './ActionIcon';
import Pane from './Pane';

function SidebarItem(props) {
  const { item } = props;
  const { name, icon, active } = item;

  function getClassName() {
    let className = "SidebarItem";

    if (active) {
      className += " SidebarItem--active";
    }

    return className;
  }

  return (
    <li className={getClassName()}>
      { active ? <ActionIcon icon={icon} /> : <Icon icon={icon} /> }
      <a className="SidebarItem__link" href="#">{name}</a>
    </li>
  );
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
