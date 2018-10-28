import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Pane from './Pane';
import Recipies from './Recipies';
import Store from './Store';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          name: 'Receptes',
          path: '/recipies',
          active: true,
        },
        {
          id: 2,
          name: 'Magatzem',
          path: '/store',
          active: false,
        },
        {
          id: 3,
          name: 'Calculadora',
          path: '/calculator',
          active: false,
        },
      ],
    };
  }

  render() {
    const { items } = this.state;

    return (
      <Router>
        <div>
          <Navbar />
          <Sidebar items={items} />
          <Pane className="Main">
            <Route
              key="0"
              path="/recipies"
              exact
              component={Recipies}
            />
            <Route
              key="1"
              path="/store"
              exact
              component={Store}
            />
          </Pane>
        </div>
      </Router>
    );
  }
}

export default App;
