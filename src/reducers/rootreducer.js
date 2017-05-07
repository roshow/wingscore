
import { combineReducers } from 'redux';
import players from './players'


const round = (state = 0, action = {}) => {
  switch (action.type) {
    case 'NEW_ROUND':
      return action.payload.round

    default:
      return state
  }
}

const tournamentStarted = (state = false, action = {}) => {
  switch (action.type) {
    case 'NEW_ROUND':
      if ( action.payload.round > 0 ) return true
      return false

    default:
      return state
  }
}

const matches = (state = {}, action = {}) => {
  switch (action.type) {
    case 'NEW_ROUND':
     return {
      ...state,
      [action.payload.round]: {
        '1': {
          
        }
      }
     }

    default:
      return state
  }
}

const rootreducer = combineReducers({
  players,
  round,
  tournamentStarted,
  matches
})

export default rootreducer

