import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers/rootreducer';
import App from './containers/App';
import './index.css';

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(
        thunkMiddleware
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
  return store
}

const store = configureStore()

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
