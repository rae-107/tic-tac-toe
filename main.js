var ticTacToe = new Game()

var gameBoard = document.getElementById('boardGrid')
var topLeft = document.getElementById('topLeft')
var topMiddle = document.getElementById('topMiddle')
var topRight = document.getElementById('topRight')
var middleLeft = document.getElementById('middleLeft')
var middleMiddle = document.getElementById('middleMiddle')
var middleRight = document.getElementById('middleRight')
var bottomLeft = document.getElementById('bottomLeft')
var bottomMiddle = document.getElementById('bottomMiddle')
var bottomRight = document.getElementById('bottomRight')
var playerPromt = document.getElementById('playerPrompt')
var allBoxes = document.getElementsByClassName('boxes')
var playerOneScore = document.getElementById('playerOneScore')
var playerTwoScore = document.getElementById('playerTwoScore')

gameBoard.addEventListener('click', function (event) {
  displayGameBoard(event)
})

function displayGameBoard(event) {

  if (event.target.id === 'topLeft' && playerPromt.innerText.includes('turn')) {
    ticTacToe.playToken(0)
    editPrompt()
    topLeft.innerText = ticTacToe.board[0]
  } else if (event.target.id === 'topMiddle' && playerPromt.innerText.includes('turn')) {
    ticTacToe.playToken(1)
    editPrompt()
    topMiddle.innerText = ticTacToe.board[1]
  } else if (event.target.id === 'topRight' && playerPromt.innerText.includes('turn')) {
    ticTacToe.playToken(2)
    editPrompt()
    topRight.innerText = ticTacToe.board[2]
  } else if (event.target.id === 'middleLeft' && playerPromt.innerText.includes('turn')) {
    ticTacToe.playToken(3)
    editPrompt()
    middleLeft.innerText = ticTacToe.board[3]
  } else if (event.target.id === 'middleMiddle' && playerPromt.innerText.includes('turn')) {
    ticTacToe.playToken(4)
    editPrompt()
    middleMiddle.innerText = ticTacToe.board[4]
  } else if (event.target.id === 'middleRight' && playerPromt.innerText.includes('turn')) {
    ticTacToe.playToken(5)
    editPrompt()
    middleRight.innerText = ticTacToe.board[5]
  } else if (event.target.id === 'bottomLeft' && playerPromt.innerText.includes('turn')) {
    ticTacToe.playToken(6)
    editPrompt()
    bottomLeft.innerText = ticTacToe.board[6]
  } else if (event.target.id === 'bottomMiddle' && playerPromt.innerText.includes('turn')) {
    ticTacToe.playToken(7)
    editPrompt()
    bottomMiddle.innerText = ticTacToe.board[7]
  } else if (event.target.id === 'bottomRight' && playerPromt.innerText.includes('turn')) {
    ticTacToe.playToken(8)
    editPrompt()
    bottomRight.innerText = ticTacToe.board[8]
  }
}

function editPrompt() {
  if (ticTacToe.decideWinner(0, 1, 2) === true || ticTacToe.decideWinner(3, 4, 5) === true ||
    ticTacToe.decideWinner(6, 7, 8) === true || ticTacToe.decideWinner(0, 3, 6) === true ||
    ticTacToe.decideWinner(1, 4, 7) === true || ticTacToe.decideWinner(2, 5, 8) === true ||
    ticTacToe.decideWinner(0, 4, 8) === true || ticTacToe.decideWinner(2, 4, 6) === true) {
    playerPromt.innerText = `${ticTacToe.secondPlayer.token} Wins`
    ticTacToe.tileCounter = 0
    updatePlayerWins()
    setTimeout(resetGameBoard, 1500)
  } else if (ticTacToe.decideDraw() === 9) {
    playerPromt.innerText = `It's a draw!`
    ticTacToe.tileCounter = 0
    ticTacToe.secondPlayer = ticTacToe.startingPlayer
    setTimeout(resetGameBoard, 1500)
  } else {
    playerPromt.innerText = `It's ${ticTacToe.currentPlayer.token} turn`
  }
}

function updatePlayerWins() {
  playerOneScore.innerText = ticTacToe.playerOne.wins
  playerTwoScore.innerText = ticTacToe.playerTwo.wins
}

function resetGameBoard() {
  ticTacToe.resetGame()
  for (var i = 0; i < allBoxes.length; i++) {
    allBoxes[i].innerText = ''
  }
  playerPromt.innerText = `It's ${ticTacToe.startingPlayer.token} turn`
}