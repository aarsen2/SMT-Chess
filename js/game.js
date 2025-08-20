import {Board} from "./Board.js";
import {Player} from "./Player.js";


export class Game {
    constructor() {
        
        //object creation
        this.board = new Board();
        this.player1 = new Player("Aaron");
        this.player2 = new Player("Ashton");

        
        //method calls
        this.initializeBoard()


        
        //log messages
        console.log("Creating Board")
        console.log("Creating Player 1")
        console.log("Creating Plaer 2")
    }

    getBoardState() {
        return this.board;
    }

    movePiece(piece, newLocation) {
        this.board.placePiece(piece, newLocation)
    }

    initializeBoard() {
        this.board.createPiece("pawn", this.player1, [0,0])
    }
}