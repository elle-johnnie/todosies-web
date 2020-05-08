import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './Components/Layout/NavBar'
import Dashboard from './Components/Dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch> {/* switch allows only one route at a time on the page, otherwise loads them all if called */}
            <Route path='/' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
