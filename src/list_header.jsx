import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ListHeader(props) {
  const { listName, count } = props;

  const iconStyles = {
    color: 'lightseagreen',
    margin: '0.7rem 0.5rem 0'
  };

  return (
    <header className='ingredient-list-header'>
      <p className='subtle'>{count} ingredients</p>
      <div className='title'>
	<h1>{listName}</h1>
	<FontAwesomeIcon
	  icon='pencil-alt'
	  className='action-icon'
	  style={iconStyles}
	/>
    </div>
  </header>
  );
}

export default ListHeader;
