import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from './routes/Home/Home';
import Workouts from './routes/Workouts/Workouts';
import './App.css';

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path="/workouts">
          <Workouts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
