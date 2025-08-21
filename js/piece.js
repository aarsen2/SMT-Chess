import { demonData } from "./demons.js";


export class Piece {
    constructor(pieceType, player) {
        //pieceType is a string that will be used to find the correct piece type frin Demons.js
        this.type = demonData.find(type => type["Name"] === pieceType)
            || demonData.find(type => type["Name"] === "Pawn");

        //player is a player object
        this.player = player;
    }

    getName() {
        return this.type.Name;
    }
}