import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPencilAlt,
  faChevronDown,
  faArrowLeft,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';

import App from './App';

library.add(faPencilAlt, faChevronDown, faArrowLeft, faEllipsisH);

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
