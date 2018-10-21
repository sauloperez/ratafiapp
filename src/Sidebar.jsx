import React from 'react';

import Icon from './Icon';
import Pane from './Pane';

function Sidebar(props) {
  const items = [
    { id: 1, name: 'Receptes' }
  ];

  function SidebarItem(props) {
    return (
      <li>
        <Icon icon="book" />
        {props.item.name}
      </li>
    );
  }

  return (
    <Pane width="240px">
      <ul>
        {items.map((item) => <SidebarItem key={item.id} item={item} />)}
      </ul>
    </Pane>
  );
}

export default Sidebar;
