class Game {
  constructor() {
    this.board = ['', '', '', '', '', '', '', '', '']
    this.playerOne = new Player('one', '🌻')
    this.playerTwo = new Player('two', '🥀')
    this.startingPlayer = this.playerOne
    this.secondPlayer = this.playerTwo
    this.currentPlayer = this.playerOne
    this.tileCounter = 0
  }

  goesFirst() {
    if (this.startingPlayer === this.playerOne) {
      this.secondPlayer = this.playerOne
      this.startingPlayer = this.playerTwo
      this.currentPlayer = this.startingPlayer
    } else {
      this.secondPlayer = this.playerTwo
      this.startingPlayer = this.playerOne
      this.currentPlayer = this.startingPlayer
    }
  }

  currentPlayersTurn() {
    if (this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo
      this.secondPlayer = this.playerOne
    } else {
      this.currentPlayer = this.playerOne
      this.secondPlayer = this.playerTwo
    }
  }

  playToken(i) {
    if (this.board[i] !== this.playerOne.token &&
      this.board[i] !== this.playerTwo.token) {
      this.board[i] = this.currentPlayer.token
      this.currentPlayersTurn()
      this.tileCounter++
    }
  }

  decideWinner(one, two, three) {
    if (this.board[one] === this.secondPlayer.token &&
      this.board[two] === this.secondPlayer.token &&
      this.board[three] === this.secondPlayer.token) {
      this.secondPlayer.increaseWins()
      return true
    }
  }

  decideDraw() {
    for (var i = 0; i < this.board.length; i++) {
      if (this.board[i] === this.playerOne.token ||
        this.board[i] === this.playerTwo.token) {
        return this.tileCounter
      }
    }
  }

  resetGame() {
    ticTacToe.goesFirst()
    for (var i = 0; i < ticTacToe.board.length; i++) {
      ticTacToe.board[i] = ''
    }
  }
}