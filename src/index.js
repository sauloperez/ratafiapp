import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencilAlt, faChevronDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import App from './App';

library.add(faPencilAlt, faChevronDown, faArrowLeft);

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
