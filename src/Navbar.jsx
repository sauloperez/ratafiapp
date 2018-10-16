import React from 'react';

import './Navbar.css'

import Avatar from './Avatar';

function Navbar(props) {
  return (
    <nav className="Navbar">
      <div className="Navbar__wrapper">
        <Avatar />
      </div>
    </nav>
  );
}

export default Navbar;
