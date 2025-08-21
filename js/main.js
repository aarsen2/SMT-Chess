import { Display } from "./display.js"
import { Game } from "./game.js"



let game = new Game();
let display = new Display("chessBoard", game.board)

display.onCellClick = (location) => {
    game.selectCell(location);
}

game.highlightCell = (location) => {
    display.highlightCell(location);
}
game.unhighlightCell = (location) => {
    display.unhighlightCell(location);
}

game.updateBoard = () => {
    display.drawPieces();
}

game.updateTurnDisplay = (turn) => {
    display.updateTurnDisplay(turn);
}

console.log(`Created display ${display}`)
console.log(`Created game ${game}`)


