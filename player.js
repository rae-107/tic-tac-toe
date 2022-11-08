class Player {
    constructor(id, token) {
        this.id = id // ex. 1
        this.token = token // ex. '🌞🌝' || '🤍💚💙💜🖤'
        this.wins = 0
    }
    increaseWins() {
        this.wins++
    }
}