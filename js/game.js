import { Board } from "./board.js";
import { Player } from "./player.js";
import { equalArrays, containsArray } from "./ultilty.js";
import { MovementCalculations } from "./movementCalculations.js";
import { enPassantTracker } from "./enPassantTracker.js";


export class Game {
    constructor() {

        //object creation
        this.board = new Board();
        this.player1 = new Player("Aaron", 1);
        this.player2 = new Player("Ashton", 2);
        this.player1King = "Demonica (SJ)"
        this.player2King = "Demi-Fiend"
        this.player1Music = new Audio(`../music/${this.player1King}/battleMusic.mp3`)
        this.player2Music = new Audio(`../music/${this.player2King}/battleMusic.mp3`)
        this.pascalSong = new Audio(`../music/Pascal.mp3`)
        this.turn = this.player1;
        this.enPassantTracker = new enPassantTracker
        this.movementCalculator = new MovementCalculations(this.board, this.player1, this.player2, this.enPassantTracker)


        //this order is from left to right, top to bottom.
        this.player1.pieces = ["White Rider", "Rakshasa", "Matador", "Baal", this.player1King, "Succubus", "Decarabia", "Principality", "Lilim", "Kusi Mitama", "Jack Frost", "Hua Po", "Black Ooze", "Ara Mitama", "Pixie", "Ame-no-Uzume"]
        this.player2.pieces = ["Slime", "Saki Mitama", "Pyro Jack", "Jack Frost", "Pixie", "Nigi Mitama", "Mokoi", "Mandrake", "Cu Chulainn", "Mother Harlot", "Yaksini", "Pascal", this.player2King, "Black Frost", "Mothman", "Trumpeter"]

        //create callback methods
        this.highlightCell = null;
        this.unhighlightCell = null;
        this.updateBoard = null;
        this.updateTurnDisplay = null;
        this.highlightLegalMoves = null;
        this.unhighlightLegalMoves = null;
        this.startDisplay = null;
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
        this.startDisplay();
    }
    
    startGame() {
        this.initializeBoard();
        this.player1Music.play();
        this.updateTurnDisplay(this.turn)
    }

    //method declarations


    initializeBoard() {
        //pass in an array of the names of the pieces. in order going left to right, top to bottom.
        this.setPlayerPieces(this.player1.pieces, this.player1)
        this.setPlayerPieces(this.player2.pieces, this.player2)
        this.updateBoard();
    }


    selectCell(location) {

        console.log(`you clicked on ${location}`)
        //Selected an Available piece from the current active turn user
        if (!this.#currentlySelected && this.board.hasPiece(location) && this.turn == this.board.getPiece(location).player) {
            this.#currentlySelected = true;
            this.#selectedCell = [...location];
            this.highlightCell(location);
            this.calculateLegalMoves(location)
            this.highlightLegalMoves(this.#legalMoves)

            if (this.board.getPiece(location).type.Name == "Pascal") {
                this.player1Music.pause()
                this.player2Music.pause()
                this.pascalSong.play()
            }
        }


        //Selected the same piece again to de select
        else if (this.#currentlySelected && equalArrays(this.#selectedCell, location)) {
            this.unhighlightCell(location);
            this.unhighlightLegalMoves(this.#legalMoves)
            this.#currentlySelected = false;
            this.pascalSong.pause();

            this.turn == this.player1 ? this.player1Music.play() : this.player2Music.play();

        }

        //Selected the an Enemy Piece after selecting your own piece
        else if (this.#currentlySelected && this.board.hasPiece(location) && this.turn != this.board.getPiece(location).player) {
            console.log("you want to attack");
            console.log(location);
            console.log(this.#selectedCell);

            if (containsArray(this.#legalMoves, location)) {
                this.unhighlightCell(this.#selectedCell);
                this.unhighlightLegalMoves(this.#legalMoves)
                this.SetEnPassant(this.#selectedCell, location)
                
                this.#currentlySelected = false;

                // do calculation. if move is neutral do this

                let attacker = this.board.getPiece(this.#selectedCell)
                let defender = this.board.getPiece(location)


                //Hits Weakness
                if (attacker.type.Attack_Type == defender.type.Weakness || defender.type.Weakness === "All") {
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
                //sets en passant when a new pawn is moved, resets it when another piece is moved

                this.checkEnPassantKill(location)
                this.SetEnPassant(this.#selectedCell, location)
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
        for (let i = 0; i < pieces.length; i++) {
            let column = i % 8;
            let row = Math.floor(i / 8) + start;
            this.board.createPiece(pieces[i], player, [row, column]);
            if ((row == 0 || row == 7) && (column == 2 || column == 5))
                this.board.getPiece([row, column]).isBishop = true;
        }
    }

    changeTurn() {
        this.turn = this.turn == this.player1 ? this.player2 : this.player1
        this.updateTurnDisplay(this.turn);
        this.toggleMusic()
    }


    calculateLegalMoves(location) {
        let currentLegalMoves = this.movementCalculator.calculateLegalMoves(location)
        console.log(currentLegalMoves)
        this.#legalMoves = currentLegalMoves
    }

    SetEnPassant(oldLocation, newLocation) {
        let piece = this.board.getPiece(oldLocation)
        //Checks for pawn
        let enPassant = [];
        if (piece.type.Tier == 1) {
            //checks for 2 space move above 
            if(oldLocation[0] + 2 == newLocation[0]) {
                enPassant = [...newLocation];
                enPassant[0] -= 1;
            }
            else if(oldLocation[0] - 2 == newLocation[0]) {
                enPassant = [...newLocation];
                enPassant[0] += 1;
            }
            else {/*Enpassant not needed.*/}
        }
        
        
        this.enPassantTracker.enPassant[0] = enPassant[0];
        this.enPassantTracker.enPassant[1] = enPassant[1];
    }


    checkEnPassantKill(location) {
        let selectedPiece = this.board.getPiece(this.#selectedCell)
        let direction = selectedPiece.player == this.player1 ? -1 : 1; 
        console.log(direction)
        
        if (this.enPassantTracker.enPassant[0] != null && this.enPassantTracker.enPassant[1] != null) {
            let killablePiece = [this.enPassantTracker.enPassant[0] + direction, this.enPassantTracker.enPassant[1]]
            console.log(`your killablePiece is  ${killablePiece}`)
            if (equalArrays(location, this.enPassantTracker.enPassant)) { 
                this.board.killPiece(killablePiece)
            }
        }
    }

    toggleMusic() {
        if (this.turn != this.player1) {
            this.player1Music.pause();
            this.pascalSong.pause();
            this.player2Music.play();
            console.log("player2 music should be playing")
        }
        else {
            this.player2Music.pause();
            this.player1Music.play();
            this.pascalSong.pause();
            console.log("player 1 music should be playing agian.")
        }
    }
}