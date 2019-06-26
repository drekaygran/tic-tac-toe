'use strict'

// const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
// const ui = require('./ui')

// const cells = ['', '', '', '', '', 'work', '', '', '']
// figure out how to assign each cell to html
// const createBoard = () => {
//   document.getElementById('game-board').innerHTML = cells
//   for (let i=0)
// }

const onNewGame = event => {
  // createBoard()
  api.newGame()
    .then(console.log)
    .catch(console.log)
}

module.exports = {
  onNewGame
}
