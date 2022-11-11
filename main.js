// Dom related JavaScript
var ticTacToe = new Game()
// query selectors
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
var playerPromt = document.querySelector('h1')
var allBoxes = document.querySelector('.boxes')
var playerOneSide = document.querySelector('#playerOneScore')
var playerTwoSide = document.querySelector('#playerTwoScore')

// event listeners
gameBoard.addEventListener('click', function(event) {
    displayGameBoard(event)
})


// functions

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

function editPrompt() {
    
    if (ticTacToe.decideWinner() === `${ticTacToe.otherPlayer.token} wins`) {
        updatePlayerWins()
        playerPromt.innerText = `${ticTacToe.otherPlayer.token} wins`
    } else {
        playerPromt.innerText = `It's ${ticTacToe.currentPlayer.token} turn`
    }
}

function updatePlayerWins() {
    playerOneSide.innerText = ticTacToe.playerOne.wins
    playerTwoSide.innerText = ticTacToe.playerTwo.wins
}