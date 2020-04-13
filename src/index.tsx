import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import libraryReducer from './routes/Library/reducer';
import workoutReducer from './routes/Workouts/reducer';
import techniqueReducer from './components/CustomWorkout/reducer';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = {
  library: libraryReducer,
  workout: workoutReducer,
  program: techniqueReducer,
}

const store = createStore(combineReducers(rootReducer), composeWithDevTools(
  applyMiddleware(thunk),
));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
