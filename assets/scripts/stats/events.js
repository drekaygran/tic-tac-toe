'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetGames = () => {
  api.getGames()
    .then(ui.getGamesResults)
    .then(console.log)
    .catch(console.log)
}

module.exports = {
  onGetGames
}
