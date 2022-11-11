class Game {
    constructor() {
        this.playerOne = new Player(1, '🌞')
        this.playerTwo = new Player(2, '🌝')
        this.currentPlayer = this.playerOne
        this.otherPlayer = this.playerTwo
        this.board = ['','','','','','','','','']
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
    decideWinner() {
        if (this.board[0] === this.otherPlayer.token && this.board[1] === this.otherPlayer.token && this.board[2] === this.otherPlayer.token) {
            // this.otherPlayer.increaseWins()
            this.otherPlayer.increaseWins()
            console.log('0,1,2')
            // this.resetGame()
            return `${this.otherPlayer.token} wins`
        } else if (this.board[3] === this.otherPlayer.token && this.board[4] === this.otherPlayer.token && this.board[5] === this.otherPlayer.token) {
            // this.otherPlayer.increaseWins()
            this.otherPlayer.increaseWins()
            console.log('3,4,5')
            // this.resetGame()
            return `${this.otherPlayer.token} wins`
        } else if (this.board[6] === this.otherPlayer.token && this.board[7] === this.otherPlayer.token && this.board[8] === this.otherPlayer.token) {
            // this.otherPlayer.increaseWins()
            this.otherPlayer.increaseWins()
            console.log('6,7,8')
            // this.resetGame()
            return `${this.otherPlayer.token} wins`
        } else if (this.board[0] === this.otherPlayer.token && this.board[3] === this.otherPlayer.token && this.board[6] === this.otherPlayer.token) {
            // this.otherPlayer.increaseWins()
            this.otherPlayer.increaseWins()
            console.log('0,3,6')
            // this.resetGame()
            return `${this.otherPlayer.token} wins`
        } else if (this.board[1] === this.otherPlayer.token && this.board[4] === this.otherPlayer.token && this.board[7] === this.otherPlayer.token) {
            // this.otherPlayer.increaseWins()
            this.otherPlayer.increaseWins()
            console.log('1,4,7')
            // this.resetGame()
            return `${this.otherPlayer.token} wins`
        } else if (this.board[2] === this.otherPlayer.token && this.board[5] === this.otherPlayer.token && this.board[8] === this.otherPlayer.token) {
            // this.otherPlayer.increaseWins()
            this.otherPlayer.increaseWins()
            console.log('2,5,8')
            // this.resetGame()
            return `${this.otherPlayer.token} wins`
        } else if (this.board[0] === this.otherPlayer.token && this.board[4] === this.otherPlayer.token && this.board[8] === this.otherPlayer.token) {
            // this.otherPlayer.increaseWins()
            this.otherPlayer.increaseWins()
            console.log('0,4,8')
            // this.resetGame()
            return `${this.otherPlayer.token} wins`
        } else if (this.board[2] === this.otherPlayer.token && this.board[4] === this.otherPlayer.token && this.board[6] === this.otherPlayer.token) {
            // this.otherPlayer.increaseWins()
            this.otherPlayer.increaseWins()
            console.log('2,4,6')
            // this.resetGame()
            return `${this.otherPlayer.token} wins`
        }
    }
    resetGame() {
         for (var i = 0; i < this.board.length; i++) {
            this.board[i] = ''
        }
    }
}
