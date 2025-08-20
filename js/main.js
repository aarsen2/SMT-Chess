import { Display } from "./display.js"
import { Game } from "./game.js"



let game = new Game();
let display = new Display("chessBoard", game.board)

display.onCellClick = (location) => {
    game.selectCell(location)
}

game.highlightCell = (location) => {
    display.hightlightCell(location)
}

console.log(`Created display ${display}`)
console.log(`Created game ${game}`)

initializeGame();


function initializeGame() {
    //display.drawBoard(game.board)
}