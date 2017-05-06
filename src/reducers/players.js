
const players = (state = [], action = {}) => {
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

    default:
      return state;
  }
}

export default players