class Game {
    constructor() {
        this.playerOne = new Player(1, '🌞')
        this.playerTwo = new Player(2, '🌝')
        this.currentPlayer = this.playerOne
        this.otherPlayer = this.playerTwo
        this.board = ['','','','','','','','','']
        this.drawCounter = 0
    }
    playToken(i) {
            if (this.board[i] !== this.playerOne.token && this.board[i] !== this.playerTwo.token) {
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
        if (this.board[one] === this.otherPlayer.token && this.board[two] === this.otherPlayer.token && this.board[three] === this.otherPlayer.token) {
            this.otherPlayer.increaseWins()
            return true
        } 
    }
    decideDraw() {
        for (var i = 0; i < this.board.length; i++) {
            if (this.board[i] === this.playerOne.token || this.board[i] === this.playerTwo.token) {
                this.drawCounter++
                return this.drawCounter
            }
        }
    }
    resetGame() {
         for (var i = 0; i < this.board.length; i++) {
            this.board[i] = ''
        }
    }
}