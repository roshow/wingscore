
import { combineReducers } from 'redux';
// import players from './players'
import { generateMatches } from './../logic/pairings'
import { shuffle } from './../logic/pairings'


const players = (state = {}, action = {}) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
        ...state,
        [ action.payload.name ]: {
          name: action.payload.name,
          wins: 0,
          losses: 0,
          mov: 0
        }
      }

    case 'REMOVE_PLAYER':
      // return [ ...state ].filter( player => ( player.name !== action.payload.name ) )

      return Object.keys(state).reduce( (players, key) => {
        if ( action.payload.name === key ) {
          return players
        }
        // players[key] = state[key]
        return {
          ...players,
          [key]: state[key]
        }

      }, {})

    default:
      return state;
  }
}



const round = (state = 0, action = {}) => {
  switch (action.type) {
    case 'NEW_ROUND':
      return action.payload.round

    default:
      return state
  }
}

const rounds = (state = {}, action = {}) => {
  switch (action.type) {
    case 'NEW_ROUND':
      return {
        ...state,
        [action.payload.round]: Object.keys(action.payload.newMatches)
      }

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
      // const players = Object.keys(action.payload.players)
      return {
        ...state,
        ...action.payload.newMatches
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
  rounds,
  tournamentStarted,
  // rounds,
  matches
})

export default rootreducer

