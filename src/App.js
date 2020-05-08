import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './Components/Layout/NavBar'
import Dashboard from './Components/Dashboard/Dashboard'
import ProjectDetail from './Components/Project/ProjectDetail'
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch> {/* switch allows only one route at a time on the page, otherwise loads them all if called */}
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetail} />
            <Route path='/signin' component={SignIn} />
            <Route past='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
