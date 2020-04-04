import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Layout } from 'antd';

import Drawer from './routes/Drawer/Drawer';
import Library from './routes/Library/Library';
import Workouts from './routes/Workouts/Workouts';
import './App.css';

const history = createBrowserHistory();

const layoutStyle = {
  minHeight: '100vh',
} as any;

function App() {
  return (
    <Layout style={layoutStyle}>
      <Router history={history}>
        <Route path="/">
          <Drawer />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/workouts">
          <Workouts />
        </Route>
        <Route path="/home">
          <Library />
        </Route>
      </Router>
    </Layout>
  );
}

export default App;
