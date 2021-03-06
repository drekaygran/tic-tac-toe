'use strict'

const config = require('../config')
const store = require('../store')

// newGame creates an object like the following
// {
//   "game": {
//     "id": 3,
//     "cells": ["","","","","","","","",""],
//     "over": false,
//     "player_x": {
//       "id": 1,
//       "email": "and@and.com"
//     },
//     "player_o": null
//   }
// }

const newGame = data => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

const spaceSelection = () => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': store.update.id,
          'value': store.update.currentPlayer
        },
        'over': store.update.over
      }
    }
  })
}

module.exports = {
  newGame,
  spaceSelection
}
