import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default Routes;
