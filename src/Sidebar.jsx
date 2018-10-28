import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
    const { name, icon, path } = item;

    return (
      <li className={this.getClassName()}>
        <Link to={path} className={this.getLinkClassName()}>{name}</Link>
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
