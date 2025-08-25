import { Board } from "./board.js";
import { Player } from "./player.js";
import { equalArrays, containsArray } from "./ultilty.js";
import { MovementCalculations } from "./movementCalculations.js";


export class Game {
    constructor() {

        //object creation
        this.board = new Board();
        this.player1 = new Player("Aaron", 1);
        this.player2 = new Player("Ashton", 2);
        this.turn = this.player1;
        this.movementCalculator = new MovementCalculations(this.board, this.player1, this.player2)
        this.player1.pieces = ["White Rider", "Rakshasa", "Matador", "Baal", "Demonica (SJ)", "Succubus", "Decarabia", "Principality", "Lilim", "Kusi Mitama", "Jack Frost", "Hua Po", "Black Ooze", "Ara Mitama", "Angel", "Ame-no-Uzume"]
        this.player2.pieces = ["Slime", "Saki Mitama", "Pyro Jack", "Preta", "Pixie", "Nigi Mitama", "Mokoi", "Mandrake", "Cu Chulainn", "Mother Harlot", "Yaksini", "Loki", "Demi-Fiend", "Black Frost", "Mothman", "Trumpeter"]

        //create callback methods
        this.highlightCell = null;
        this.unhighlightCell = null;
        this.updateBoard = null;
        this.updateTurnDisplay = null;
        this.highlightLegalMoves = null;
        this.unhighlightLegalMoves = null;
        //method calls


        //log messages


        //console.log("Creating Board")
        //console.log("Creating Player 1")
        //console.log("Creating Plaer 2")
    }
    //Random Properties
    #selectedCell = [];
    #currentlySelected = false;
    #legalMoves = [];

    initialize() {
        this.updateTurnDisplay(this.turn)
        this.initializeBoard();
    }

    //method declarations


    initializeBoard() {
        //pass in an array of the names of the pieces. in order going left to right, top to bottom.
        this.setPlayerPieces(this.player1.pieces, this.player1)
        this.setPlayerPieces(this.player2.pieces, this.player2)
        this.updateBoard();
    }


    selectCell(location) {
        console.log(`You clickd on ${location[0]}, ${location[1]}`)



        //Selected an Available piece from the current active turn user
        if (!this.#currentlySelected && this.board.hasPiece(location) && this.turn == this.board.getPiece(location).player) {
            this.#currentlySelected = true;
            this.#selectedCell = location;
            this.highlightCell(location);
            this.calculateLegalMoves(location)
            this.highlightLegalMoves(this.#legalMoves)
        }


        //Selected the same piece again to de select
        else if (this.#currentlySelected && equalArrays(this.#selectedCell, location)) {
            this.unhighlightCell(location);
            this.unhighlightLegalMoves(this.#legalMoves)
            this.#currentlySelected = false;
        }

        //Selected the an Enemy Piece after selecting your own piece
        else if (this.#currentlySelected && this.board.hasPiece(location) && this.turn != this.board.getPiece(location).player) {
            console.log("you want to attack");
            console.log(location);
            console.log(this.#selectedCell);

            if (containsArray(this.#legalMoves, location)) {
                this.unhighlightCell(this.#selectedCell);
                this.unhighlightLegalMoves(this.#legalMoves)

                this.#currentlySelected = false;

                // do calculation. if move is neutral do this

                let attacker = this.board.getPiece(this.#selectedCell)
                let defender = this.board.getPiece(location)


                //Hits Weakness
                if (attacker.type.Attack_Type == defender.type.Weakness) {
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
            }
            else {
                console.log("Invalid attack")
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
            console.log(location)
            console.log(this.#legalMoves)
            if (containsArray(this.#legalMoves, location)) {
                this.unhighlightCell(this.#selectedCell)
                this.unhighlightLegalMoves(this.#legalMoves)

                this.#currentlySelected = false;
                this.board.movePiece(this.#selectedCell, location);
                this.updateBoard()
                this.changeTurn();
            }
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

    setPlayerPieces(pieces, player) {
        let start = player == this.player1 ? 0 : 6
        console.log(start)
        for (let i = 0; i < pieces.length; i++) {
            let column = i % 8;
            let row = Math.floor(i / 8) + start;
            console.log(column)
            console.log(row)
            console.log(player)
            console.log(pieces)
            console.log(pieces[i])
            this.board.createPiece(pieces[i], player, [row, column]);
            if ((row == 0 || row == 7) && (column == 2 || column == 5))
                this.board.getPiece([row, column]).isBishop = true;
        }
    }

    changeTurn() {
        this.turn = this.turn == this.player1 ? this.player2 : this.player1
        this.updateTurnDisplay(this.turn);
    }


    calculateLegalMoves(location) {
        let currentLegalMoves = this.movementCalculator.calculateLegalMoves(location)
        console.log(currentLegalMoves)
        this.#legalMoves = currentLegalMoves
    }

}