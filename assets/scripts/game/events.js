'use strict'

// const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

// store.cells = ['', '', '', '', '', '', '', '', '']
let currentPlayerIsX

const onNewGame = data => {
  store.cells = ['', '', '', '', '', '', '', '', '']
  store.update = {}
  store.update.over = false
  $('.col-4').text('')
  currentPlayerIsX = true
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)
}

// how to determine if the game is over
const winningArrays = gameArray => {
  const a = [gameArray[0], gameArray[3], gameArray[6]]
  const b = [gameArray[1], gameArray[4], gameArray[7]]
  const c = [gameArray[2], gameArray[5], gameArray[8]]
  const d = [gameArray[0], gameArray[4], gameArray[8]]
  const e = [gameArray[2], gameArray[4], gameArray[6]]
  return [gameArray.slice(0, 3), gameArray.slice(3, 6), gameArray.slice(6, 9), a, b, c, d, e]
}

const isGameOver = gameArray => {
  const sets = winningArrays(gameArray)
  let tie
  let gameOver = false
  if (sets.some(arr => arr.every(val => val && val === arr[0]))) {
    gameOver = true
  } else if (gameArray.every(item => item !== '')) {
    gameOver = true
    tie = 'tie'
    return tie
  }
  return gameOver
}

// if the game is over, don't insert a character
const onSpaceSelection = event => {
  let gameOver = isGameOver(store.cells)
  store.update.id = event.target.id
  // console.log(store.user)
  if (!store.user) {
    return ui.signInToPlay()
  } else if (gameOver) {
    return ui.clickNewGame()
  } else if (store.cells[event.target.id]) {
  // if the space is invalid, don't insert a character
    return ui.invalidSpace()
  } else {
    // otherwise, allow current player to choose a space
    if (!currentPlayerIsX) {
      $(event.target).text('O')
      store.cells[event.target.id] = 'O'
      ui.xTurnMessage()
      // ui.spaceSelectionSuccess(event.target)
      // if a move is made, switch current player to opposite
      store.update.currentPlayer = $(event.target).text()
      currentPlayerIsX = !currentPlayerIsX
    } else {
      $(event.target).text('X')
      store.cells[event.target.id] = 'X'
      ui.oTurnMessage()
      store.update.currentPlayer = $(event.target).text()
      // ui.spaceSelectionSuccess(event.target)
      currentPlayerIsX = !currentPlayerIsX
    }
    // console.log(store.cells[store.update.id])
  }
  // after turn, check to see if game is over
  gameOver = isGameOver(store.cells)
  if (gameOver) {
    store.update.over = true
    // console.log(store.update.over)
    if (gameOver === 'tie') {
      ui.tieGame()
    } else if (!currentPlayerIsX) {
      ui.playerXWins()
    } else if (currentPlayerIsX) {
      ui.playerOWins()
    }
  // console.log(store.update.currentPlayer)
  // console.log('gameOver', isGameOver())
  }
  api.spaceSelection()
    .then()
    .catch()
}

module.exports = {
  onNewGame,
  onSpaceSelection
}
