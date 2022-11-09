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


// event listeners
gameBoard.addEventListener('click', function(event) {
    displayGameBoard(event)
})



// functions

function displayGameBoard(event) {
    if (event.target.id === 'topLeft') {
        ticTacToe.board[0] = ticTacToe.currentPlayer.token
        topLeft.innerText = ticTacToe.board[0]
    } else if (event.target.id === 'topMiddle') {
        ticTacToe.board[1] = ticTacToe.currentPlayer.token
        topMiddle.innerText = ticTacToe.board[1]
    } else if (event.target.id === 'topRight') {
        ticTacToe.board[2] = ticTacToe.currentPlayer.token
        topRight.innerText = ticTacToe.board[2]
    } else if (event.target.id === 'middleLeft') {
        ticTacToe.board[3] = ticTacToe.currentPlayer.token
        middleLeft.innerText = ticTacToe.board[3]
    } else if (event.target.id === 'middleMiddle') {
        ticTacToe.board[4] = ticTacToe.currentPlayer.token
        middleMiddle.innerText = ticTacToe.board[4]
    } else if (event.target.id === 'middleRight') {
        ticTacToe.board[5] = ticTacToe.currentPlayer.token
        middleRight.innerText = ticTacToe.board[5]
    } else if (event.target.id === 'bottomLeft') {
        ticTacToe.board[6] = ticTacToe.currentPlayer.token
        bottomLeft.innerText = ticTacToe.board[6]
    } else if (event.target.id === 'bottomMiddle') {
        ticTacToe.board[7] = ticTacToe.currentPlayer.token
        bottomMiddle.innerText = ticTacToe.board[7]
    } else if (event.target.id === 'bottomRight') {
        ticTacToe.board[8] = ticTacToe.currentPlayer.token
        bottomRight.innerText = ticTacToe.board[8]
    }
}