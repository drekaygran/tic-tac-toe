'use strict'

// const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// figure out how to assign each cell to html, may not need this.
// const createBoard = () => {
//   const emptyCells = ['works', 'works', 'works', 'works', 'works', 'works', 'works', 'works', 'works']
//   for (let i = 0; i < emptyCells.length; i++) {
//     const cell = document.getElementById(i)
//     $(cell).text(emptyCells[i])
//   }
// }
let cells = ['', '', '', '', '', '', '', '', '']

const onNewGame = event => {
  event.preventDefault()
  cells = ['', '', '', '', '', '', '', '', '']
  $('.col-4').text('')
  api.newGame(event)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)
}

const onSpaceSelection = event => {
  const spaceId = '#' + event.target.id
  if (cells[event.target.id]) {
    return ui.invalidSpace()
  } else {
    $(spaceId).text('X')
    cells[event.target.id] = 'X'
  }
}

module.exports = {
  onNewGame,
  onSpaceSelection
}
