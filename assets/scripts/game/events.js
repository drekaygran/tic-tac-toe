'use strict'

// const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

let cells = ['', '', '', '', '', '', '', '', '']

const onNewGame = () => {
  event.preventDefault()
  cells = ['', '', '', '', '', '', '', '', '']
  $('.col-4').text('')
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)
}

// if the game is over, don't insert a character
//
let currentPlayerIsX = true

// how to determine if the game is over, incomplete array
const winningArrays = gameArray => {
  return [gameArray.slice(0, 3), gameArray.slice(3, 6), gameArray.slice(6, 9)]
}

// this still isn't working...
const isGameOver = gameArray => {
  const sets = winningArrays(gameArray)
  let gameOver = false
  if (sets.some(arr => arr.every(val => val && val === arr[0]))) {
    gameOver = true
  }
  return gameOver
}

const onSpaceSelection = event => {
  console.log(event.target)
//  store.update.id = event.target.id
//  store.update.currentPlayer = event.target.data('cell-index')
  api.spaceSelection(event)
    .then(console.log)
    .catch(console.log)
  const gameOver = isGameOver(cells)
  if (event.target.token === '') {
    return ui.signInToPlay()
  } else if (gameOver) {
    // declare winner
    return ui.gameOver
  } else
  if (cells[event.target.id]) {
  // if the space is invalid, don't insert a character
    return ui.invalidSpace()
  } else {
    // otherwise, allow current player to choose a space
    if (!currentPlayerIsX) {
      store.currentPlayer = '0'
      $(event.target).text('O')
      cells[event.target.id] = 'O'
      ui.spaceSelectionSuccess(event.target)
      // if a move is made, switch current player to opposite
      currentPlayerIsX = !currentPlayerIsX
    } else {
      store.currentPlayer = 'X'
      $(event.target).text('X')
      cells[event.target.id] = 'X'
      ui.spaceSelectionSuccess(event.target)
      currentPlayerIsX = !currentPlayerIsX
    }
  }
  console.log(cells)
  // console.log('gameOver', isGameOver())
}

module.exports = {
  onNewGame,
  onSpaceSelection
}
