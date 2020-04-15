import React, { Suspense } from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Layout } from 'antd';

import Drawer from './routes/Drawer/Drawer';
import './App.css';

const history = createBrowserHistory();
const LazyLibrary = React.lazy(() => import('./routes/Library/Library'));
const LazyWorkouts = React.lazy(() => import('./routes/Workouts/Workouts'));

const layoutStyle = {
  minHeight: '100vh',
} as any;

function App() {
  return (
    <Layout className="main-app" style={layoutStyle}>
      <Router history={history}>
        <Route path="/">
          <Drawer />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/workouts">
          <Suspense fallback={<div>Loading...</div>}>
            <LazyWorkouts />
          </Suspense>
        </Route>
        <Route path="/home">
          <Suspense fallback={<div>Loading...</div>}>
            <LazyLibrary />
          </Suspense>
        </Route>
      </Router>
    </Layout>
  );
}

export default App;
