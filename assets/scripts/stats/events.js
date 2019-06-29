'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetGames = () => {
  api.getGames()
    .then(ui.getGamesResults)
    .catch(ui.getResultsFail)
}

module.exports = {
  onGetGames
}
