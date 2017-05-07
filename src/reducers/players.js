
const players = (state = [], action = {}) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_PLAYER':
      return [
        ...state,
        {
          name: action.payload.name,
          wins: 0,
          losses: 0,
          mov: 0
        }
      ]

    case 'REMOVE_PLAYER':
      return [ ...state ].filter( player => ( player.name !== action.payload.name ) )

    default:
      return state;
  }
}

export default players