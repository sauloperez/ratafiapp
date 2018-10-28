import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Pane from './Pane';
import Recipie from './Recipie';

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
              component={Recipie}
            />
            <Route
              key="1"
              path="/store"
              exact
              render={() => (
                <header>
                  <h1>Magatzem</h1>
                </header>
              )}
            />
          </Pane>
        </div>
      </Router>
    );
  }
}

export default App;
