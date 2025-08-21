import {Board} from "./board.js";
import {Player} from "./player.js";
import { equalArrays, containsArray } from "./ultilty.js";



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
        //player 1 backrow
        this.board.createPiece("Slime", this.player1, [0,0]);
        this.board.createPiece("Saki Mitama", this.player1, [0,1]);
        this.board.createPiece("Pyro Jack", this.player1, [0,2]);
        this.board.createPiece("Preta", this.player1, [0,3]);
        this.board.createPiece("Pixie", this.player1, [0,4]);
        this.board.createPiece("Nigi Mitama", this.player1, [0,5]);
        this.board.createPiece("Mokoi", this.player1, [0,6]);
        this.board.createPiece("Mandrake", this.player1, [0,7]);
        //player 1 front row
        this.board.createPiece("Lilim", this.player1, [1,0]);
        this.board.createPiece("Kusi Mitama", this.player1, [1,1]);
        this.board.createPiece("Jack Frost", this.player1, [1,2]);
        this.board.createPiece("Hua Po", this.player1, [1,3]);
        this.board.createPiece("Black Ooze", this.player1, [1,4]);
        this.board.createPiece("Ara Mitama", this.player1, [1,5]);
        this.board.createPiece("Angel", this.player1, [1,6]);
        this.board.createPiece("Ame-no-Uzume", this.player1, [1,7]);




        //player 2 front row
        this.board.createPiece("Lilim", this.player2, [6,0]);
        this.board.createPiece("Lilim", this.player2, [6,1]);
        this.board.createPiece("Lucifer", this.player2, [6,2]);
        this.board.createPiece("Lucifer", this.player2, [6,3]);
        this.board.createPiece("Lucifer", this.player2, [6,4]);
        this.board.createPiece("Lucifer", this.player2, [6,5]);
        this.board.createPiece("Lucifer", this.player2, [6,6]);
        this.board.createPiece("Lucifer", this.player2, [6,7]);
        //player 2 backrow
        this.board.createPiece("Lucifer", this.player2, [7,0]);
        this.board.createPiece("Lucifer", this.player2, [7,1]);
        this.board.createPiece("Lucifer", this.player2, [7,2]);
        this.board.createPiece("Lucifer", this.player2, [7,3]);
        this.board.createPiece("Lucifer", this.player2, [7,4]);
        this.board.createPiece("Lucifer", this.player2, [7,5]);
        this.board.createPiece("Lucifer", this.player2, [7,6]);
        this.board.createPiece("Lucifer", this.player2, [7,7]);



        /*////Old game creation logic. Keeping as a fallback
        for (let row = 0; row < 2; row++) {
            for (let column = 0; column < 8; column++) {
                this.board.createPiece("Lucifer", this.player1, [row,column]);
                this.board.createPiece("Succubus", this.player2, [7-row,column]);
            }
        }
            */

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

    changeTurn() {
        this.turn = this.turn == this.player1 ? this.player2 : this.player1
        this.updateTurnDisplay(this.turn);
    }






    calculateLegalMoves(location) {
        /// location is an array [row, column]
        let currentLegalMoves = [];
        let selectedPiece = this.board.getPiece(location)
        let pieceType = selectedPiece.type.Tier;
        let piecePlayer = selectedPiece.player
        let direction = piecePlayer == this.player1 ? 1 : -1;
        switch (pieceType) {
            case 1: {
                //"**********PAWN************"//
                
                // Checks 1 space in front of the pawn
                let testSpace = [location[0] + direction, location[1]];
                if(this.board.getPiece(testSpace) == null) {
                    currentLegalMoves[currentLegalMoves.length] = testSpace

                    //Checks 2 paces in front of the pawn and checks to see if it has moved.
                    testSpace = [location[0] + (direction * 2 ), location[1]]
                    if (this.board.getPiece(testSpace) == null && !selectedPiece.hasMoved) {
                        currentLegalMoves[currentLegalMoves.length] = testSpace
                    }
                }

                //checks to the right diagonal for enemy
                testSpace = [location[0] + direction, (location[1] + 1)];
                if(this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer) {
                    currentLegalMoves[currentLegalMoves.length] = testSpace
                }

                //checks to the left Diagonal for enemy
                testSpace = [location[0] + direction, (location[1] - 1)];
                if(this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer) {
                    currentLegalMoves[currentLegalMoves.length] = testSpace
                }

            } break;
                
            case 2: {

            } break;

            case 3: {

            } break;
            
            case 4: {
            } break;

            case 5: {
            } break;
            
            case 6: {

            } break;

            default: alert("Something has gone terribly wrong in the switch stament for move legality")
        }
        console.log(currentLegalMoves)
        this.#legalMoves = currentLegalMoves  
    }




    isLegalMove(selectedCell, location) {
        let selectedPiece = this.board.getPiece(selectedCell);
        let pieceType = selectedPiece.type.Tier;
        let piecePlayer = selectedPiece.player;
    }
}