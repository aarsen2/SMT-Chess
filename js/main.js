import { Display } from "./display.js"
import { Game } from "./game.js"



let display = new Display("chessBoard")

initializeGame();


function initializeGame() {
    display.drawBoard()
}