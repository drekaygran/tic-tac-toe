'use strict'

const getGamesResults = data => {
  const gamesStarted = data.games
  const gamesPlayed = gamesStarted.filter(game => game.over)
  $('#get-games-message').text(`You've played ${gamesPlayed.length} games of tic tac toe.`)
}

const getResultsFail = data => {
  $('#get-games-message').text(`Cannot retrieve results.  Try again.`)
}

module.exports = {
  getGamesResults,
  getResultsFail
}
