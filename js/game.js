import {Board} from "./board.js";
import {Player} from "./player.js";

export class Game {
    constructor() {
        
        //object creation
        this.board = new Board();
        this.player1 = new Player("Aaron", 1);
        this.player2 = new Player("Ashton", 2);
        this.highlightCell = null
        //method calls
        this.initializeBoard()
        
        
        
        //log messages
        console.log("Creating Board")
        console.log("Creating Player 1")
        console.log("Creating Plaer 2")
    }
    //Random Properties
    #selectedCell = [];




    //method declarations

    movePiece(piece, newLocation) {
        this.board.placePiece(piece, newLocation)
    }

    initializeBoard() {
        for (let row = 0; row < 2; row++) {
            for (let column = 0; column < 8; column++) {
                this.board.createPiece("Metatron", this.player1, [row,column])
                this.board.createPiece("Pawn", this.player2, [7-row,column])
            }
        }
    }


    selectCell(location) {
        console.log(`You clickd on ${location[0]}, ${location[1]}`)
        this.#selectedCell = location
        this.highlightCell(location)
    }
}