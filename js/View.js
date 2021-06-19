export default class GameView {
    constructor(gameBoard) {
        this.board = gameBoard
        this.total_cell = 81;
        for(var i = 0; i < this.total_cell; i++) {
            this.board.innerHTML += `
                <div class="cell" data-index=` + i + `></div>
            `
        }
        // for(var i = 44; i < ) 
    }

    updateBoard(game) {
        for(var i = 0; i < game.size; i++) {
            for(var j = 0; j < game.size; j++) {
                const cell = this.board.querySelector(`.cell[data-index="${i*9+j}"`)
                if(game.pioneer[i][j] != 0)
                    cell.textContent = game.pioneer[i][j]
            }
        }
    }
}