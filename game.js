class Game {
    constructor() {
        this.playerOne = new Player(1, '🌻')
        this.playerTwo = new Player(2, '🥀')
        this.currentPlayer = this.playerOne
        this.otherPlayer = this.playerTwo
        this.board = ['', '', '', '', '', '', '', '', '']
        this.tileCounter = 0
        this.startingPlayer = this.playerOne
    }
    goesFirst() {
        if (this.startingPlayer === this.playerOne) {
            this.otherPlayer = this.playerOne
            this.startingPlayer = this.playerTwo
            this.currentPlayer = this.startingPlayer
        } else {
            this.otherPlayer = this.playerTwo
            this.startingPlayer = this.playerOne
            this.currentPlayer = this.startingPlayer
        } 
    }
    playToken(i) {
        if (playerPromt.innerText === `${ticTacToe.otherPlayer.token} Wins` || playerPromt.innerText === `${ticTacToe.currentPlayer.token} Wins`) {
       }
       else if (this.board[i] !== this.playerOne.token && this.board[i] !== this.playerTwo.token) {
           this.board[i] = this.currentPlayer.token
           this.currentPlayersTurn()
           editPrompt()
       }
   }
    currentPlayersTurn() {
        if (this.currentPlayer === this.playerOne) {
            this.currentPlayer = this.playerTwo
            this.otherPlayer = this.playerOne
        } else if (this.currentPlayer === this.playerTwo) {
            this.currentPlayer = this.playerOne
            this.otherPlayer = this.playerTwo
        }
    }
    decideWinner(one, two, three) {
        if (this.board[one] === this.otherPlayer.token && 
            this.board[two] === this.otherPlayer.token && 
            this.board[three] === this.otherPlayer.token) {
            this.otherPlayer.increaseWins()   
            return true
        }
    }
    decideDraw() {
        for (var i = 0; i < this.board.length; i++) {
            if (this.board[i] === this.playerOne.token || this.board[i] === this.playerTwo.token) {
                this.tileCounter++
                return this.tileCounter
            }
        }
    }
    resetGame() {
        //  for (var i = 0; i < this.board.length; i++) {
        ticTacToe.board[0] = ''
        ticTacToe.board[1] = ''
        ticTacToe.board[2] = ''
        ticTacToe.board[3] = ''
        ticTacToe.board[4] = ''
        ticTacToe.board[5] = ''
        ticTacToe.board[6] = ''
        ticTacToe.board[7] = ''
        ticTacToe.board[8] = ''
        topLeft.innerText = ''
        topMiddle.innerText = ''
        topRight.innerText = ''
        middleLeft.innerText = ''
        middleMiddle.innerText = ''
        middleRight.innerText = ''
        bottomLeft.innerText = ''
        bottomMiddle.innerText = ''
        bottomRight.innerText = ''
        ticTacToe.goesFirst()
        playerPromt.innerText = `It's ${ticTacToe.startingPlayer.token} turn`
        // }
    }
}