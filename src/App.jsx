import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
