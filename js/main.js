import { Display } from "./display.js"
import { Game } from "./game.js"



let display = new Display()

initializeGame();


function initializeGame() {
    display.drawBoard(game.getBoardState())
}