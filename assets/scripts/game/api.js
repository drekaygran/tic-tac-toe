'use strict'

const config = require('../config')

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
    game: {}
  })
}

module.exports = {
  newGame
}
