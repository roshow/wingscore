
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

export default players