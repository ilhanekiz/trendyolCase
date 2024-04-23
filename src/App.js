import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Dashboard from './containers/Dashboard/Dashboard';
class App extends Component {
  render() {
    return (
      <main className='main'>
        <Router>
          <Switch>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </main>
    );
  }
}

export default App;
