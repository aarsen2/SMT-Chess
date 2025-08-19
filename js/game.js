
export class Game {
    constructor() {
        this.board = new this.board();
    }

    getBoardState() {
        return this.board;
    }

    movePiece(piece, newLocation) {
        this.board.placePiece(piece, newLocation)
    }
}