import { Display } from "./Display.js"
import { Game } from "./Game.js"



let game = new Game();
let display = new Display("chessBoard", game.board)

console.log(`Created display ${display}`)
console.log(`Created game ${game}`)

initializeGame();


function initializeGame() {
    //display.drawBoard(game.board)
}