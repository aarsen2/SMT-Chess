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

        //create callback methods
        this.highlightCell = null;
        this.unhighlightCell = null;
        this.drawBoard = null;
        this.updateTurnDisplay = null;
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
                this.board.createPiece("Lucifer", this.player1, [row,column]);
                this.board.createPiece("Succubus", this.player2, [7-row,column]);
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
            console.log("you want to move");
            console.log(location);
            console.log(this.#selectedCell);


            this.unhighlightCell(this.#selectedCell);
            this.#currentlySelected = false;

            // do calculation. if move is neutral do this

            let attacker = this.board.getPiece(this.#selectedCell)
            let defender = this.board.getPiece(location)


            //Hits Weakness
            if (attacker.type.Attack_Type == defender.type.Weakness)  {
                console.log("Weakness Has been Hit")
                this.board.movePiece(this.#selectedCell, location);
                this.updateBoard();
                console.log("You get one more turn")
            }

            //Hits resistance
            else if (attacker.type.Attack_Type == defender.type.Resistance) {
                console.log("Resistance Has been Hit. You lost your turn.")
                this.changeTurn()
            }

            else {
                console.log("you did a neutral attack")
                this.board.movePiece(this.#selectedCell, location);
                this.updateBoard();
                this.changeTurn();
            }
            /*
            //if move hits weakness
            this.board.movePiece()
            this.updateBoard()
            // To Be implemented ---  this.showOneMore();

            // if move hits strength
            this.changeTurn();
            */
        }
        
        //Selected an empty spot after selecting your own piece
        else if (this.#currentlySelected && !this.board.hasPiece(location)) {
            console.log("you want to move");
            console.log(location)
            console.log(this.#selectedCell)


            this.unhighlightCell(this.#selectedCell)
            this.#currentlySelected = false;
            this.board.movePiece(this.#selectedCell, location);
            this.updateBoard()
            this.changeTurn();
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
    changeTurn() {
        this.turn = this.turn == this.player1 ? this.player2 : this.player1
        this.updateTurnDisplay(this.turn);
    }
}