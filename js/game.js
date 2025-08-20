import {Board} from "./board.js";
import {Player} from "./player.js";
import { equalArrays } from "./ultilty.js";



export class Game {
    constructor() {
        
        //object creation
        this.board = new Board();
        this.player1 = new Player("Aaron", 1);
        this.player2 = new Player("Ashton", 2);
        this.turn = this.player1;
        this.highlightCell = null;
        this.unhighlightCell = null;
        //method calls
        this.initializeBoard();
        
        
        
        //log messages
        console.log("Creating Board")
        console.log("Creating Player 1")
        console.log("Creating Plaer 2")
    }
    //Random Properties
    #selectedCell = [];
    #currentlySelected = false;



    //method declarations

    movePiece(piece, newLocation) {
        this.board.placePiece(piece, newLocation)
    }

    initializeBoard() {
        for (let row = 0; row < 2; row++) {
            for (let column = 0; column < 8; column++) {
                this.board.createPiece("Metatron", this.player1, [row,column]);
                this.board.createPiece("Pawn", this.player2, [7-row,column]);
            }
        }
    }


    selectCell(location) {
        console.log(`You clickd on ${location[0]}, ${location[1]}`)



        //Selected an Available piece from the current active turn user
        if (!this.#currentlySelected && this.board.hasPiece(location) && this.turn == this.board.getPiece(location).player) {
            this.#currentlySelected = true;
            this.#selectedCell = location;
            this.highlightCell(location);
        }


        //Selected the same piece again to de select
        else if (this.#currentlySelected && equalArrays(this.#selectedCell, location)) {
            this.unhighlightCell(location);
            this.#currentlySelected = false;
        }

        //Selected the an Enemy Piece after selecting your own piece
        else if (this.#currentlySelected && this.board.hasPiece(location) && this.turn != this.board.getPiece(location).player) {
            console.log("clicked enemy");
        }

        //Selected an empty spot after selecting your own piece
        else if (this.#currentlySelected && !this.board.hasPiece(location)) {
            console.log("you want to move");
        }

        

        //invalid selections, give visual message

        //no current selection. selected empty spot
        else if (!this.#currentlySelected && !this.board.hasPiece(location)) {
            console.log("You cant select an empty spot stupid");
        }

        //no current selection. selected enemy piece
        else if (!this.#currentlySelected && this.turn != this.board.getPiece(location).player) {
            console.log("Its not your turn silly");
        }

        else if (this.#currentlySelected && this.board.hasPiece(location) && this.turn == this.board.getPiece(location).player) {
            console.log("You already have someone there ");
        }

        else {
            alert("Something Unexpected Happened");
        }


    }
}