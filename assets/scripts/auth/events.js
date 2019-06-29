'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onSignIn = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const onChangePassword = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFail)
}

const onSignOut = event => {
  event.preventDefault()
  $('section').hide()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
