class Game {
    constructor() {
        this.playerOne = new Player(1, '🤍')
        this.playerTwo = new Player(2, '🖤')
        this.currentPlayer = this.playerOne
        this.board = ['','','','','','','','','']
    }
    playToken() {
        // for (var i = 0; i < this.board.length; i++) {
        //     this.board[i] = this.currentPlayer.token
        //     console.log(this.board)
        //     console.log(this.board[i])
        // }
        this.currentPlayersTurn()
    }
    currentPlayersTurn() {
        if (this.currentPlayer === this.playerTwo) {
            this.currentPlayer = this.playerOne
        } else if (this.currentPlayer === this.playerOne) {
            this.currentPlayer = this.playerTwo
        }
    }
    decideWinner() {
        if (this.board[0] === this.currentPlayer.token && this.board[1] === this.currentPlayer.token && this.board[2] === this.currentPlayer.token) {
            this.currentPlayer.increaseWins()
            console.log(`${this.currentPlayer.token} won!`)
            playerPrompt.innerText = `${this.currentPlayer.token} won!`
        } else if(this.board[3] === this.currentPlayer.token && this.board[4] === this.currentPlayer.token && this.board[5] === this.currentPlayer.token) {
            this.currentPlayer.increaseWins()
            console.log(`${this.currentPlayer.token} won!`)
            playerPrompt.innerText = `${this.currentPlayer.token} won!`
        } else if(this.board[6] === this.currentPlayer.token && this.board[7] === this.currentPlayer.token && this.board[8] === this.currentPlayer.token) {
            this.currentPlayer.increaseWins()
            console.log(`${this.currentPlayer.token} won!`)
            playerPrompt.innerText = `${this.currentPlayer.token} won!`
        } else if(this.board[0] === this.currentPlayer.token && this.board[3] === this.currentPlayer.token && this.board[6] === this.currentPlayer.token) {
            this.currentPlayer.increaseWins()
            console.log(`${this.currentPlayer.token} won!`)
            playerPrompt.innerText = `${this.currentPlayer.token} won!`
        } else if(this.board[1] === this.currentPlayer.token && this.board[4] === this.currentPlayer.token && this.board[7] === this.currentPlayer.token) {
            this.currentPlayer.increaseWins()
            console.log(`${this.currentPlayer.token} won!`)
            playerPrompt.innerText = `${this.currentPlayer.token} won!`
        } else if(this.board[2] === this.currentPlayer.token && this.board[5] === this.currentPlayer.token && this.board[8] === this.currentPlayer.token) {
            this.currentPlayer.increaseWins()
            console.log(`${this.currentPlayer.token} won!`)
            playerPrompt.innerText = `${this.currentPlayer.token} won!`
        } else if(this.board[0] === this.currentPlayer.token && this.board[4] === this.currentPlayer.token && this.board[8] === this.currentPlayer.token) {
            this.currentPlayer.increaseWins()
            console.log(`${this.currentPlayer.token} won!`)
            playerPrompt.innerText = `${this.currentPlayer.token} won!`
        } else if(this.board[2] === this.currentPlayer.token && this.board[4] === this.currentPlayer.token && this.board[6] === this.currentPlayer.token) {
            this.currentPlayer.increaseWins()
            console.log(`${this.currentPlayer.token} won!`)
            playerPrompt.innerText = `${this.currentPlayer.token} won!`
        } else {
            playerPrompt.innerText = 'Cat\'s game'
        }
    }
    resetGame() {
         for (var i = 0; i < this.board.length; i++) {
            this.board[i] = ''
        }
    }
}
