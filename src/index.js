import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

import { createStore, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// import rootReducer from './reducers/rootReducer';

const initPlayersArr = [
  {
    name: 'Rolando Garcia',
    wins: 4,
    losses: 0,
    mov: 800,
  },
  {
    name: 'Bruce Wayne',
    wins: 3,
    losses: 1,
    mov: 600,
  },
  {
    name: 'Clark Kent',
    wins: 2,
    losses: 2,
    mov: 400,
  }
]

const players = (state = [], action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  players
})

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
  return store
}

const store = configureStore({
  players: initPlayersArr
})

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
