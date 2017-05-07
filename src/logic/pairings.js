const players = [
  'rolando',
  'batman',
  'marek',
  'bruno',
  'the joker',
  'matthew'
]

// stole this from the Internet for shuffling a js array

function shuffle(originalArr) {
  let array = [...originalArr]
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function makeMatches (players, matches={}, round=1, match=1) {
  const updatedMatches = {
    ...matches,
    [match]: {
      match,
      player1: players[0],
      player2: players[1],
      bye: false
    }
  }
  if (players.length > 0) {
    return makeMatches(players.slice(2), updatedMatches, round, match + 1)
  }
  return updatedMatches
}

export const initialParings = players => makeMatches(shuffle(players))
