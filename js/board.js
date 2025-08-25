import { Piece } from "./piece.js";



export class Board {
    constructor() {
        this.grid = Array.from({ length: 8 }, () => Array(8).fill(null));
    }


    createPiece(type, player, location) {
        let piece = new Piece(type, player)
        this.grid[location[0]][location[1]] = piece;

        //console.log(`Created a new ${piece.getName()} at ${location[0]} , ${location[1]}`)
    }

    getPiece(location) {
        return this.grid[location[0]][location[1]]
    }

    hasPiece(location) {
        if (this.getPiece(location) != null) {
            return true;
        }
        else {
            return false;
        }
    }

    movePiece(oldLocation, newLocation) {
        let piece = this.grid[oldLocation[0]][oldLocation[1]];
        this.grid[newLocation[0]][newLocation[1]] = piece;
        this.grid[oldLocation[0]][oldLocation[1]] = null;
        piece.hasMoved = true;
        console.log("movied Piece to new spot ");
        console.log(oldLocation);
        console.log(newLocation);
    }

    killPiece(location) {
        console.log("killing piece")
        console.log(location)
        console.log(this.grid[location[0]][location[1]])
        this.grid[location[0]][location[1]] = null;
        console.log(this.grid[location[0]][location[1]])
    }
}