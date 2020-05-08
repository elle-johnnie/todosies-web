import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './Components/Layout/NavBar'
import Dashboard from './Components/Dashboard/Dashboard'
import ProjectDetail from './Components/Project/ProjectDetail'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch> {/* switch allows only one route at a time on the page, otherwise loads them all if called */}
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
