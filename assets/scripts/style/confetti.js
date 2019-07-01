const gameEvents = require('../game/events')

const currentPlayerIsX = gameEvents.currentPlayerIsX
console.log(currentPlayerIsX)
let winner
if (currentPlayerIsX) {
  winner = 'O'
} else {
  winner = 'X'
}

for (let i = 0; i < 250; i++) {
  create(i)
}

// function reset (x) {
//   $('.confetti-' + x).animate({
//     'top': -Math.random() * 20 + '%',
//     'left': '-=' + Math.random() * 15 + '%'
//   }, 0, function () {
//     drop(x)
//   })
// }

function create (i) {
  const colorIdx = Math.ceil(Math.random() * 3)
  let color = 'red'
  switch (colorIdx) {
    case 1:
      color = 'yellow'
      break
    case 2:
      color = 'blue'
      break
    default:
      color = 'red'
  }

  $('<div class="confetti- ' + i + ' ' + color + '""></div>').text(winner).css({
    'top': -Math.random() * 20 + '%',
    'left': Math.random() * 100 + '%',
    'opacity': Math.random() + 0.5,
    'transform': 'rotate(' + Math.random() * 360 + 'deg)'
  }).appendTo('.wrapper')

  drop(i)
}

function drop (x) {
  $('.confetti-' + x).animate({
    top: '100%',
    left: '+=' + Math.random() * 15 + '%'
  }, Math.random() * 3000 + 3000, function () {
    // reset(x)
  })
}
