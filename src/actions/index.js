
export const AddPlayer = name => ({
  type: 'ADD_PLAYER',
  payload: {
    name
  }
})

export const RemovePlayer = name => ({
  type: 'REMOVE_PLAYER',
  payload: {
    name 
  }
})

export const NewRound = (round, players) => ({
  type: 'NEW_ROUND',
  payload: {
    round,
    players
  }
})
