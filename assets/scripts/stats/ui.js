'use strict'

const getGamesResults = data => {
  const gamesStarted = data.games
  const gamesPlayed = gamesStarted.filter(game => game.over)
  console.log(gamesPlayed)
  $('#get-games-message').text(`You've played ${gamesPlayed.length} games of tic tac toe.`)
}

module.exports = {
  getGamesResults
}
