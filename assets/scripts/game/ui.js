'use strict'

// come back and fix later

const newGameSuccess = () => {
  $('#game-message').text('Ready to play.')
}

const newGameFail = () => {
  $('#game-message').text('Game failed to load.')
}

const invalidSpace = () => {
  $('#game-message').text('Invalid space.')
}

module.exports = {
  newGameSuccess,
  newGameFail,
  invalidSpace
}
