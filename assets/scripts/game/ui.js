'use strict'

const store = require('../store')

// come back and fix later

const newGameSuccess = data => {
  $('#game-message').text('Ready to play.')
  store.game = data.game
}

const newGameFail = () => {
  $('#game-message').text('Game failed to load.')
}

const invalidSpace = () => {
  $('#game-message').text('Invalid space.')
}

const signInToPlay = () => {
  $('#game-message').text('Sign in to play a game.')
}

const spaceSelectionSuccess = data => {
  // store.game = data
}

const playerXWins = () => {
  $('#game-message').text('Game Over, X wins!')
}

const playerOWins = () => {
  $('#game-message').text('Game Over, O wins!')
}

const tieGame = () => {
  $('#game-message').text('Game Over, you tied. Lame.')
}

const xTurnMessage = () => {
  $('#game-message').text(`X's move`)
}

const oTurnMessage = () => {
  $('#game-message').text(`O's move`)
}

module.exports = {
  newGameSuccess,
  newGameFail,
  invalidSpace,
  spaceSelectionSuccess,
  signInToPlay,
  playerXWins,
  playerOWins,
  tieGame,
  xTurnMessage,
  oTurnMessage
}
