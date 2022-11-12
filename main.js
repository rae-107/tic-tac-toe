var ticTacToe = new Game()

var gameBoard = document.querySelector('#boardGrid')
var topLeft = document.querySelector('#topLeft')
var topMiddle = document.querySelector('#topMiddle')
var topRight = document.querySelector('#topRight')
var middleLeft = document.querySelector('#middleLeft')
var middleMiddle = document.querySelector('#middleMiddle')
var middleRight = document.querySelector('#middleRight')
var bottomLeft = document.querySelector('#bottomLeft')
var bottomMiddle = document.querySelector('#bottomMiddle')
var bottomRight = document.querySelector('#bottomRight')
var playerPromt = document.querySelector('#playerPrompt')
var allBoxes = document.querySelector('.boxes')
var playerOneScore = document.querySelector('#playerOneScore')
var playerTwoScore = document.querySelector('#playerTwoScore')

gameBoard.addEventListener('click', function (event) {
  displayGameBoard(event)
})
// change id's to class for the rule of specificity, possible parameter
function displayGameBoard(event) {
  if (event.target.id === 'topLeft') {
    ticTacToe.playToken(0)
    topLeft.innerText = ticTacToe.board[0]
  } else if (event.target.id === 'topMiddle') {
    ticTacToe.playToken(1)
    topMiddle.innerText = ticTacToe.board[1]
  } else if (event.target.id === 'topRight') {
    ticTacToe.playToken(2)
    topRight.innerText = ticTacToe.board[2]
  } else if (event.target.id === 'middleLeft') {
    ticTacToe.playToken(3)
    middleLeft.innerText = ticTacToe.board[3]
  } else if (event.target.id === 'middleMiddle') {
    ticTacToe.playToken(4)
    middleMiddle.innerText = ticTacToe.board[4]
  } else if (event.target.id === 'middleRight') {
    ticTacToe.playToken(5)
    middleRight.innerText = ticTacToe.board[5]
  } else if (event.target.id === 'bottomLeft') {
    ticTacToe.playToken(6)
    bottomLeft.innerText = ticTacToe.board[6]
  } else if (event.target.id === 'bottomMiddle') {
    ticTacToe.playToken(7)
    bottomMiddle.innerText = ticTacToe.board[7]
  } else if (event.target.id === 'bottomRight') {
    ticTacToe.playToken(8)
    bottomRight.innerText = ticTacToe.board[8]
  }
}
// how do you style long conditional statements
function editPrompt() {
  if (ticTacToe.decideWinner(0, 1, 2) === true || ticTacToe.decideWinner(3, 4, 5) === true || ticTacToe.decideWinner(6, 7, 8) === true || ticTacToe.decideWinner(0, 3, 6) === true || ticTacToe.decideWinner(1, 4, 7) === true || ticTacToe.decideWinner(2, 5, 8) === true || ticTacToe.decideWinner(0, 4, 8) === true || ticTacToe.decideWinner(2, 4, 6) === true) {
    playerPromt.innerText = `${ticTacToe.secondPlayer.token} Wins`
    ticTacToe.tileCounter = 0
    updatePlayerWins()
    setTimeout(ticTacToe.resetGame, 1500)
  } else if (ticTacToe.decideDraw() === 9) {
    playerPromt.innerText = `It's a draw!`
    ticTacToe.tileCounter = 0
    setTimeout(ticTacToe.resetGame, 1500)
  } else {
    playerPromt.innerText = `It's ${ticTacToe.currentPlayer.token} turn`
  }
}

function updatePlayerWins() {
  playerOneScore.innerText = ticTacToe.playerOne.wins
  playerTwoScore.innerText = ticTacToe.playerTwo.wins
}

function resetGameBoard() {
  topLeft.innerText = ''
  topMiddle.innerText = ''
  topRight.innerText = ''
  middleLeft.innerText = ''
  middleMiddle.innerText = ''
  middleRight.innerText = ''
  bottomLeft.innerText = ''
  bottomMiddle.innerText = ''
  bottomRight.innerText = ''
}