import { Piece } from "./piece.js";



export class Board {
    constructor() {
        this.grid = Array.from({ length: 8 }, () => Array(8).fill(null));
    }


    createPiece(type, player, location) {
        let piece = new Piece(type, player)
        this.grid[location[0]][location[1]] = piece;
        
        console.log(`Created a new ${piece.type.Name} at ${location[0]} , ${location[1]}`)
    }
}