'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const statsEvents = require('./stats/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-out-bar').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#new-game').on('click', gameEvents.onNewGame)
  $('.col-4').on('click', gameEvents.onSpaceSelection)
  $('#get-games').hide()
  $('section').hide()
  $('#get-games').on('click', statsEvents.onGetGames)
})
