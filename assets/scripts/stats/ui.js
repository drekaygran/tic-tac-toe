'use strict'

const getGamesResults = data => {
  console.log(data.games)
  const gamesPlayed = data.games.length
  $('#get-games-message').text(`You've played ${gamesPlayed} games of tic tac toe.`)
}

module.exports = {
  getGamesResults
}
