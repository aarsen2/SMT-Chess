import { Piece } from "./Piece.js";
import { PieceType } from "./pieceType.js";



export class Board {
    constructor() {
        this.grid = Array.from({ length: 8 }, () => Array(8).fill(null));
    }


    createPiece(type, player, location) {
        let pieceType = new PieceType(type)
        let piece = new Piece(pieceType, player)
        this.grid[location[0]][location[0]] = piece;
        
        console.log("Created Piece")
        console.log(`Placed Piece at ${location[0]} , ${location[0]}`)
    }
}