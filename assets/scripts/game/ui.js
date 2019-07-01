'use strict'

const store = require('../store')
// const confetti = require('../style/confetti')

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
  $('#game-message').text('Game Over, X wins! Click "New Game" to play again.')
  $('.wrapper').addClass('confetti-wrap')
}

const playerOWins = () => {
  $('#game-message').text('Game Over, O wins! Click "New Game" to play again.')
  $('.wrapper').addClass('confetti-wrap')
}

const tieGame = () => {
  $('#game-message').text('Game Over, you tied. Lame. Click "New Game" to play again.')
}

const xTurnMessage = () => {
  $('#game-message').text(`X's move`)
}

const oTurnMessage = () => {
  $('#game-message').text(`O's move`)
}

const clickNewGame = () => {
  $('#game-message').text('Click "New Game" to play again.')
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
  oTurnMessage,
  clickNewGame
}
