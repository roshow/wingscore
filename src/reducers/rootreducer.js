
import { combineReducers } from 'redux';
import players from './players'
import { initialParings } from './../logic/pairings'


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
      if ( action.payload.round > 0 ) {
        return true
      }
      return false

    default:
      return state
  }
}

//match.id = roundNo + . + matchNo


const matches = (state = {}, action = {}) => {
  switch (action.type) {
    case 'NEW_ROUND': 
      return {
        ...state,
        ...initialParings(action.payload.players, action.payload.round)
      }
    default:
      return state
  }
}

// const rounds = (state = {}, action = {}) => {
//   switch (action.type) {
//     case 'NEW_ROUND':
//      return {
//       ...state,
//       [action.payload.round]: {
//         '1': {

//         }
//       }
//      }

//     default:
//       return state
//   }
// }

const rootreducer = combineReducers({
  players,
  round,
  tournamentStarted,
  // rounds,
  matches
})

export default rootreducer

