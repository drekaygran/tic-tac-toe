'use strict'

const store = require('./../store')

const successMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('fail')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('success')
  $('#message').addClass('fail')
  $('form').trigger('reset')
}

// const hideSignUpBar = () => {
//   $('#sign-up-bar').hide()
//   $('#sign-out-bar').show()
// }

const signUpSuccess = data => {
  successMessage('Thanks for signing up!')
}

const signUpFail = data => {
  failMessage(`Sorry, your sign up isn't working. Try again.`)
}

const signInSuccess = data => {
  successMessage(`You are signed in!  Let's play some tic tac toe.`)
  // hideSignUpBar()
  store.user = data.user
}

const signInFail = data => {
  failMessage(`Sorry, you are not signed in. Try again.`)
}

const changePasswordSuccess = data => {
  successMessage('Your password has been changed.')
  // hideSignUpBar()
}

const changePasswordFail = data => {
  failMessage(`Sorry, failed to change password. Try again.`)
}

const signOutSuccess = data => {
  successMessage('Cheers, you have signed out.')
}

const signOutFail = data => {
  failMessage(`Sorry, you have failed to sign out. Try again.`)
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePasswordSuccess,
  changePasswordFail,
  signOutSuccess,
  signOutFail
}
